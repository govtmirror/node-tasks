// TODO: Extend this to include park attributes pulled in from CartoDB.

var fs = require('fs'),
    geoJson,
    needToProcess = [],
    parks = {},
    shp = require('shp'),
    topojson = require('topojson');

geoJson = shp.readFileSync('data/nps_boundary');

for (var i = 0; i < geoJson.features.length; i++) {
  var feature = geoJson.features[i],
      code = feature.properties.UNIT_CODE.trim(),
      existing = parks[code],
      properties = feature.properties;

  for (var prop in properties) {
    properties[prop] = properties[prop].trim();
  }

  if (existing) {
    if (existing.type === 'FeatureCollection') {
      existing.features.push(feature);
    } else if (existing.type === 'Feature') {
      existing = {
        features: [
          existing,
          feature
        ],
        type: 'FeatureCollection'
      };
    } else {
      console.log(existing);
    }

    parks[code] = existing;
  } else {
    parks[code] = feature;
  }
}

for (var park in parks) {
  needToProcess.push(parks[park]);
}

function callback() {
  if (needToProcess.length) {
    processParks(needToProcess);
  } else {
    var path = 'data/parks.';

    fs.writeFile(path + 'geojson', JSON.stringify(geoJson), function() {
      fs.writeFile(path + 'topojson', JSON.stringify(topojson.topology({collection:geoJson})));
    });
  }
}
function processParks(park) {
  var feature = JSON.parse(JSON.stringify(needToProcess.shift())),
      code = (function() {
        if (feature.properties && feature.properties.UNIT_CODE) {
          return feature.properties.UNIT_CODE.trim().toLowerCase();
        } else {
          return feature.features[0].properties.UNIT_CODE.trim().toLowerCase();
        }
      })(),
      path = 'data/parks/' + code + '.';

  fs.writeFile(path + 'geojson', JSON.stringify(feature), 'utf8', function() {
    var feature2 = JSON.parse(JSON.stringify(feature));

    fs.writeFile(path + 'topojson', JSON.stringify(topojson.topology({
      collection: feature2
    })), 'utf8', callback);
  });
}

processParks(needToProcess);