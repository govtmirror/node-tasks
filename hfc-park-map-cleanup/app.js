var archiver = require('archiver');
var fs = require('fs');
var request = require('request');
var wrench = require('wrench');

request('https://nps.cartodb.com/api/v2/sql?q=SELECT unit_code FROM parks ORDER BY unit_code', function (error, response) {
  if (error) {
    return;
  }

  var cartodbUnitCodes = [];
  var cartodbUnitCodesMissing = [];
  var mapUnitCodes = [];
  var mapUnitCodesMissing = [];
  var rows = JSON.parse(response.body).rows;
  var i;
  var unitCode;

  function copy (srcFile, destFile) {
    console.log(srcFile);
    console.log(destFile);
    fs.writeFileSync(destFile, fs.readFileSync(srcFile, 'utf8'), 'utf8');
  }

  for (i = 0; i < rows.length; i++) {
    cartodbUnitCodes.push(rows[i].unit_code.toLowerCase());
  }

  fs.readdir('test', function (err, directories) {
    if (err) {
      return;
    }

    for (i = 0; i < directories.length; i++) {
      var directory = directories[i];

      if (directory !== '.DS_Store') {
        var archive = archiver('zip');
        var output = fs.createWriteStream('test/' + directory + '/brochure-map/archive.zip');

        mapUnitCodes.push(directory.toLowerCase());
        output.on('close', function () {
          var path = 'test/' + directory + '/brochure-map/archive.zip';

          fs.stat('test/' + directory + '/brochure-map/archive.zip', function (err, stats) {
            if (err) {
              return;
            }

            var bytes = stats.size;

            fs.unlink(path, function () {
              fs.readdir('test/' + directory + '/brochure-map', function (err, files) {
                if (err) {
                  return;
                }

                console.log(bytes);

                wrench.copyDirSyncRecursive('test/' + directory + '/brochure-map', 'copy/' + directory + '/brochure-map', {
                  excludeHiddenUnix: true,
                  forceDelete: true,
                  preserveFiles: false
                });
                // TODO: Need to make sure park is in parks table.
                // INSERT INTO test_table (column_name, column_name_2, the_geom) VALUES ('this is a string', 11, ST_SetSRID(ST_Point(-110, 43),4326))&api_key={Your API key}
                request('https://nps-hfc.cartodb.com/api/v2/sql?ap_key=' + secrets.api_key + '&q=INSERT INTO maps () VALUES ()', function (error, response, body) {
                  console.log(body);
                });
              });
            });
          });
        });
        archive.pipe(output);
        archive.bulk([{
          cwd: 'test/' + directory + '/brochure-map',
          dot: true,
          expand: true,
          src: [
            '**/*'
          ]
        }]);
        archive.finalize();
      }
    }

    for (i = 0; i < cartodbUnitCodes.length; i++) {
      unitCode = cartodbUnitCodes[i];

      if (mapUnitCodes.indexOf(unitCode) === -1) {
        mapUnitCodesMissing.push(unitCode);
      }
    }

    for (i = 0; i < mapUnitCodes.length; i++) {
      unitCode = mapUnitCodes[i];

      if (cartodbUnitCodes.indexOf(unitCode) === -1) {
        cartodbUnitCodesMissing.push(unitCode);
      }
    }

    // console.log(cartodbUnitCodesMissing);
    // console.log(mapUnitCodesMissing);
  });
});
