var archiver = require('archiver');
var dev = false;
var fs = require('fs');
var request = require('request');
var secrets = require('./secrets.json');
var i;

function archiveFinished (directories) {
  for (var i = 0; i < directories.length; i++) {
    updateCartodb(directories[i]);
  }
}
function updateCartodb (alpha) {
  var path = 'maps/' + alpha + '/brochure-map/archive.zip';

  fs.stat('maps/' + alpha + '/brochure-map/archive.zip', function (err, stats) {
    if (err) {
      return;
    }

    var bytes = stats.size;

    fs.unlink(path, function () {
      request('https://nps-hfc.cartodb.com/api/v2/sql?api_key=' + secrets.api_key + '&q=SELECT unit_code FROM parks' + (dev ? '_dev' : '') + ' WHERE unit_code=\'' + alpha + '\'', function (err, response, body) {
        if (err) {
          return;
        }

        if (response) {
          response = JSON.parse(body);

          function done () {
            request('https://nps-hfc.cartodb.com/api/v2/sql?api_key=' + secrets.api_key + '&q=INSERT INTO maps' + (dev ? '_dev' : '') + ' (created_by,file_size,is_default,map_code,name,type,unit_code,updated_by,zoomify_path) VALUES (\'Nathaniel Irwin\',' + bytes + ',true,\'brochure-map\',\'Brochure Map\',\'Zoomify\',\'' + alpha + '\',\'Nathaniel Irwin\',\'http://www.nps.gov/maps/hfc/park-maps/' + alpha + '/brochure-map/\')', function (err, response, body) {
              if (err) {
                return;
              }

              console.log('Inserted Zoomify map for: ' + alpha);
              request('https://nps.cartodb.com/api/v2/sql?api_key=' + secrets.api_key + '&q=SELECT case WHEN the_geom IS NULL then true else false end as the_geom_is_null FROM parks WHERE unit_code=\'' + alpha + '\'', function (err, response, body) {
                if (err) {
                  return;
                }

                response = JSON.parse(body);

                if (response.rows[0].the_geom_is_null === false) {
                  request('https://nps-hfc.cartodb.com/api/v2/sql?api_key=' + secrets.api_key + '&q=INSERT INTO maps' + (dev ? '_dev' : '') + ' (created_by,is_default,name,type,unit_code,updated_by) VALUES (\'Nathaniel Irwin\',false,\'Park Tiles\',\'Interactive\',\'' + alpha + '\',\'Nathaniel Irwin\')', function (err, response, body) {
                    if (err) {
                      return;
                    }

                    console.log('Inserted Park Tiles map for: ' + alpha);
                  });
                } else {
                  console.log('No bounding box for: ' + alpha);
                }
              });
            });
          }

          if (response.total_rows) {
            done();
          } else {
            request('https://nps-hfc.cartodb.com/api/v2/sql?api_key=' + secrets.api_key + '&q=INSERT INTO parks' + (dev ? '_dev' : '') + ' (created_by,unit_code,updated_by) VALUES (\'Nathaniel Irwin\',\'' + alpha + '\',\'Nathaniel Irwin\')', function (err, response, body) {
              if (err) {
                return;
              }

              console.log('Inserted park: ' + alpha);
              done();
            });
          }
        }
      });
    });
  });
}

fs.readdir('maps', function (err, directories) {
  if (err) {
    return;
  }

  for (i = 0; i < directories.length; i++) {
    var directory = directories[i];

    if (directory !== '.DS_Store') {
      var archive = archiver('zip');
      var output = fs.createWriteStream('maps/' + directory + '/brochure-map/archive.zip');

      output.on('close', function () {
        archiveFinished(directories);
      });
      archive.pipe(output);
      archive.bulk([{
        cwd: 'maps/' + directory + '/brochure-map',
        dot: true,
        expand: true,
        src: [
          '**/*'
        ]
      }]);
      archive.finalize();
    }
  }
});
