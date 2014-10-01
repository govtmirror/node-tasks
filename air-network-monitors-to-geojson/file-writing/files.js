
var fs = require('fs'),
jf = require('jsonfile'),
util = require('util');

fs.readFile('./im_networks_buffer.geojson', 'utf-8', function(err, data) {

  var info = [], network,
  records = JSON.parse(data);

    for (var i = 0; i < records.features.length; i++) {
      var feature = records.features[i];
      network = feature.properties.network_co;
      coordinates = feature.geometry;

      info.push({
        "type":"Feature",
        "geometry": coordinates,
        "properties": {
          "network_co": network }
      });

  fs.writeFile('/Users/NPSKatrina/NPMap/data/base_data/boundaries/im_networks/' + network + '.geojson', 'c{"type":"FeatureCollection","features":' + JSON.stringify(info[i]) + '}');
  }
});