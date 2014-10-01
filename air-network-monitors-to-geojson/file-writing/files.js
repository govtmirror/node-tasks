
var fs = require('fs'),
parse = require('csv-parse'),
jf = require('jsonfile'),
util = require('util'),
input = './networks.csv';

fs.readFile(input, 'utf-8', function(err, data) {
  if (err) throw err;

    jf.readFile('./im_networks_buffer.geojson', function(err, geoJson) {
      for (var i = 0; i < geoJson.features.length; i++) {
        var feature = geoJson.features[i],
        record = feature.properties.network_co,
        coordinates = feature.geometry.coordinates;

    var file = fs.writeFile('/Users/NPSKatrina/NPMap/data/base_data/boundaries/im_networks/' + record + '.geojson','{"type":"Feature","properties":{"network_co":"'+ record + '"},"geometry":{"type":"Polygon","coordinates":' + coordinates + '}');
        }
    });
  });