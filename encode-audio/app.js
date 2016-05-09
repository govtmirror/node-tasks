var fs = require('fs');
var https = require('https');
var secrets = require('./secrets.json');
var zencoder = require('zencoder')(secrets.zencoder.full);

function poll (id, callback) {
  setTimeout(function () {
    zencoder.Job.progress(id, function (error, data) {
      if (error) {
        callback(false, error);
      }

      if (data.state === 'finished') {
        callback(true);
      } else {
        poll(id, callback);
      }
    }, 5000);
  });
}

fs.readdir('./input', function (error, files) {
  var count = files.length;
  var done = 0;

  if (error) {
    console.error('Could not list the directory:', error);
    process.exit(1);
  }

  console.log('Encoding ' + count + ' files');
  files.forEach(function (file) {
    if (file !== '.DS_Store') {
      zencoder.Job.create({
        input: 'https://www.nps.gov/npmap/projects/encode-audio/' + file,
        outputs: [{
          format: 'm4a',
          max_aac_profile: 'he-aac-v2'
        }]
      }, function (error, data) {
        var path;
        var url;

        if (error) {
          console.error('Zencoder returned an error:', error);
          return;
        }

        path = './output/' + file.replace(/ /g, '_').replace('.mp3', '.m4a').replace('.wav', '.m4a');
        url = data.outputs[0].url;

        poll(data.id, function (success, error) {
          if (success) {
            https.get(url, function (response) {
              var stream = response.pipe(fs.createWriteStream(path));

              stream.on('finish', function () {
                done++;

                if (count === done) {
                  console.log('done!');
                  process.exit(0);
                } else {
                  console.log(done + ' of ' + count + ' encoded');
                }
              });
            });
          } else {
            console.error('Zencoder returned an error:', error);
          }
        });
      });
    }
  });
});
