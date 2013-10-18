// TODO: Build an interface around all of this, including the ability to zoom to individual fires, the ability to view historic dataset changes (pull commit history from GitHub), and an interface that makes it easy for park staff to create a new fire map and embed it into their website.
// TODO: Write README.
// TODO: Write blog post.

var activeFiresNew = [],
    activeFiresOld,
    config = require('./config'),
    fs = require('fs'),
    historicFires,
    moment = require('moment'),
    momentFormat = 'MMMM Do YYYY, h:mm:ss a',
    needToProcess = [],
    request = require('request');

function done() {
  var fileActiveFires,
      fileHistoricFires,
      url = 'https://api.github.com/repos/nationalparkservice/data/contents/fire/active-fires-index.json';

  for (var j = 0; j < activeFiresOld.length; j++) {
    var fire = activeFiresOld[j];

    if (activeFiresNew.indexOf(fire) === -1) {
      if (historicFires.indexOf(fire) === -1) {
        historicFires.push(fire);
      }
    }
  }

  fileActiveFires = fs.createWriteStream('data/active-fires-index.json');
  fileActiveFires.write(JSON.stringify(activeFiresNew));
  fileActiveFires.end();
  fileHistoricFires = fs.createWriteStream('data/historic-fires-index.json');
  fileHistoricFires.write(JSON.stringify(historicFires));
  fileHistoricFires.end();
  request.get({
    qs: {
      'access_token': encodeURIComponent(config.github)
    },
    timeout: 30000,
    url: url
  }, function(error, response, body) {
    if (!error) {
      var buffer = new Buffer(JSON.stringify(activeFiresNew)).toString('base64'),
          data = JSON.parse(body);

      if (data.content.replace(/\n|\r/g, '') !== buffer) {
        request.put({
          body: JSON.stringify({
            branch: 'master',
            content: buffer,
            message: 'Update active fires index',
            sha: data.sha
          }),
          qs: {
            'access_token': encodeURIComponent(config.github)
          },
          timeout: 30000,
          url: url
        }, function() {
          console.log(moment().format(momentFormat) + ': Indexes updated');
        });
      } else {
        console.log(moment().format(momentFormat) + ': Indexes updated');
      }
    }
  });
}
function processFires(needToProcess) {
  var feature = needToProcess.shift(),
      name = feature.properties.name,
      file = fs.createWriteStream('data/' + name + '.geojson'),
      github = 'https://api.github.com/repos/nationalparkservice/data/contents/fire/' + name  + '.geojson',
      str = JSON.stringify(feature);

  function callback() {
    if (needToProcess.length) {
      processFires(needToProcess);
    } else {
      done();
    }
  }

  activeFiresNew.push(name);
  file.write(str);
  file.end();
  request.get({
    qs: {
      'access_token': encodeURIComponent(config.github)
    },
    timeout: 30000,
    url: github
  }, function(error, response, body) {
    if (!error) {
      var buffer = new Buffer(str).toString('base64'),
          statusCode = response.statusCode;

      if (statusCode === 404) {
        request.put({
          body: JSON.stringify({
            branch: 'master',
            content: buffer,
            message: 'Create perimeter geometry'
          }),
          qs: {
            'access_token': encodeURIComponent(config.github)
          },
          timeout: 30000,
          url: github
        }, function(error, response) {
          if (!error && response.statusCode === 201) {
            console.log(moment().format(momentFormat) + ': ' + name + ' created and committed/pushed to GitHub');
          }

          callback();
        });
      } else if (statusCode === 200) {
        var data = JSON.parse(body);

        if (data.content.replace(/\n|\r/g, '') !== buffer) {
          request.put({
            body: JSON.stringify({
              branch: 'master',
              content: buffer,
              message: 'Update perimeter geometry',
              sha: data.sha
            }),
            qs: {
              'access_token': encodeURIComponent(config.github)
            },
            timeout: 30000,
            url: github
          }, function(error, response) {
            if (!error && response.statusCode === 200) {
              console.log(moment().format(momentFormat) + ': ' + name + ' updated and committed/pushed to GitHub');
            }

            callback();
          });
        } else {
          callback();
        }
      } else {
        callback();
      }
    } else {
      callback();
    }
  });
}
function run() {
  var download = 'http://rmgsc.cr.usgs.gov/outgoing/GeoMAC/ActiveFirePerimeters.kml',
      fileKml = fs.createWriteStream('data/active-fires.kml'),
      fileGeoJson = fs.createWriteStream('data/active-fires.geojson'),
      http = require('http'),
      jsdom = require('jsdom').jsdom,
      toGeoJson = require('togeojson'),
      url = require('url');

  activeFiresOld = JSON.parse(fs.readFileSync('data/active-fires-index.json', 'utf8'));
  historicFires = JSON.parse(fs.readFileSync('data/historic-fires-index.json', 'utf8'));

  http.get({
    host: url.parse(download).host,
    path: url.parse(download).pathname,
    port: 80
  }, function(response) {
    response.on('data', function(data) {
      fileKml.write(data);
    }).on('end', function() {
      var geoJson,
          kml;

      fileKml.end();
      kml = jsdom(fs.readFileSync('data/active-fires.kml', 'utf8'));
      geoJson = toGeoJson.kml(kml);
      fileGeoJson.write(JSON.stringify(geoJson));
      fileGeoJson.end();
      activeFiresNew = [];

      for (var i = 0; i < geoJson.features.length; i++) {
        var feature = geoJson.features[i];

        if (feature.geometry.type !== 'Point') {
          needToProcess.push(feature);
        }
      }

      processFires(needToProcess);
    });
  });
}

process.on('uncaughtexception', function(exception) {
  console.log('Uncaught exception: ' + exception+ ' at ' + moment().format(momentFormat));
});
run();
setInterval(run, 300000);