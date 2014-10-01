/* jshint camelcase: false */

var fs = require('fs'),
  parks = {},
  request = require('request'),
  success = 0,
  interval;

function addProp(alpha, key, value) {
  alpha = alpha.toLowerCase();

  if (!parks[alpha]) {
    parks[alpha] = {};
  }

  parks[alpha][key] = value;
}
function round(number) {
  return Math.round(number * 100) / 100;
}

request('https://nps.cartodb.com/api/v2/sql?q=SELECT unit_code,ST_Envelope(the_geom) AS the_geom FROM parks&format=geojson', function(error, response) {
  if (!error && response.statusCode === 200) {
    var features = JSON.parse(response.body).features;

    for (var i = 0; i < features.length; i++) {
      var feature = features[i],
        geometry = feature.geometry;

      if (geometry) {
        var coordinates = geometry.coordinates[0],
          maxLat = null,
          maxLng = null,
          minLat = null,
          minLng = null;

        for (var j = 0; j < coordinates.length; j++) {
          var coordinate = coordinates[j],
            lat = round(coordinate[1]),
            lng = round(coordinate[0]);

          if (!maxLat) {
            maxLat = lat;
          }

          if (!minLat) {
            minLat = lat;
          }

          if (!maxLng) {
            maxLng = lng;
          }

          if (!minLng) {
            minLng = lng;
          }

          if (lat >= maxLat) {
            maxLat = lat;
          }

          if (lat <= minLat) {
            minLat = lat;
          }

          if (lng >= maxLng) {
            maxLng = lng;
          }

          if (lng <= minLng) {
            minLng = lng;
          }
        }

        addProp(feature.properties.unit_code, 'b', [[minLat, minLng], [maxLat, maxLng]]);
      }
    }
  } else {
    console.log(response.statusCode);
  }

  success++;
});
request('https://nps.cartodb.com/api/v2/sql?q=SELECT unit_code,ST_Centroid(the_geom) AS the_geom FROM parks&format=geojson', function(error, response) {
  if (!error && response.statusCode === 200) {
    var features = JSON.parse(response.body).features;
    
    for (var i = 0; i < features.length; i++) {
      var feature = features[i],
        geometry = feature.geometry;

      if (geometry) {
        var coordinates = geometry.coordinates;

        addProp(feature.properties.unit_code, 'c', [
          round(coordinates[1]),
          round(coordinates[0])
        ]);
      }
    }
  } else {
    console.log(response.statusCode);
  }

  success++;
});

interval = setInterval(function() {
  if (success === 2) {
    clearInterval(interval);
    fs.writeFile('data/park-centroids-and-bounds.json', JSON.stringify(parks), function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('success!');
      }
    });
    fs.writeFile('data/park-centroids-and-bounds.jsonp', 'c(' + JSON.stringify(parks) + ');', function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('success!');
      }
    });
  }
}, 100);
