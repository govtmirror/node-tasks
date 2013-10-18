var fs = require('fs'),
    request = require('request');

// TODO: Need an inner join.
request('http://nps.cartodb.com/api/v2/sql?q=SELECT park_bounds.the_geom,park_attributes.full_name FROM park_bounds LEFT OUTER JOIN park_attributes ON park_attributes.alpha_code = park_bounds.alpha_code WHERE park_bounds.alpha_code IS NOT NULL AND park_attributes.full_name IS NOT NULL ORDER BY park_attributes.full_name&format=GeoJSON', function(error, response) {
  if (!error && response.statusCode === 200) {
    var bounds = {},
        features = JSON.parse(response.body).features,
        stream = fs.createWriteStream('build/park-bounds.jsonp');

    for (var i = 0; i < features.length; i++) {
      var feature = features[i],
          coordinates = feature.geometry.coordinates[0][0],
          ne = coordinates[2],
          sw = coordinates[0];

      bounds[feature.properties.full_name.split('\n')[0]] = [
        parseFloat(ne[0].toFixed(4)),
        parseFloat(ne[1].toFixed(4)),
        parseFloat(sw[1].toFixed(4)),
        parseFloat(sw[0].toFixed(4))
      ];
    }

    stream.once('open', function() {
      stream.write('callback(' + JSON.stringify(bounds) + ');');
      stream.end();
    });
  } else {
    console.log(response.statusCode);
  }
});