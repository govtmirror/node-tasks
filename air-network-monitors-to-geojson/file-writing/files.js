
var fs = require('fs'),
parse = require('csv-parse'),
input = './networks.csv';

fs.readFile(input, 'utf-8', function(err, data) {
  if (err) throw err;

  var datum = parse(data),
  records =datum.options.split('\n');

  for (var i = 0; i < records.length; i++) {
    var record = records[i];
    console.log(record);

    var file = fs.writeFile('/Users/NPSKatrina/NPMap/data/base_data/boundaries/im_networks/' + record + '.geojson','{"type":"Feature","properties":{"network_co":"'+ record + '"},"geometry":{"type":"Polygon","coordinates": *** }}');
      }
  });