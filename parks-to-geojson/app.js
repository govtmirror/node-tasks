// TODO: Extend this to include park attributes pulled in from CartoDB.

var bounds = {
  features: [],
  type: 'FeatureCollection'
};
var centroids = {
  features: [],
  type: 'FeatureCollection'
};
var fs = require('fs');
var needToProcess = [];
var parks = {};
var shp = require('shpjs');
var Terraformer = require('terraformer');
var topojson = require('topojson');
var geoJson;
var interval;
var shpx = require('shp2jsonx');

function callback () {
  if (needToProcess.length) {
    processParks(needToProcess);
  } else {
    var path = 'data/parks';

    fs.writeFile(path + '.geojson', JSON.stringify(geoJson), function () {
      fs.writeFile(path + '.topojson', JSON.stringify(topojson.topology({
        collection: geoJson
      }, {
        quantization: 1000000
      })), function () {
        fs.writeFile(path + '-bounds.geojson', JSON.stringify(bounds));
        fs.writeFile(path + '-centroids.geojson', JSON.stringify(centroids));
      });
    });
  }
}
function processParks (park) {
  var bbox;
  var feature = JSON.parse(JSON.stringify(needToProcess.shift()));
  var featureBounds = {
    geometry: {
      coordinates: [[]],
      type: 'Polygon'
    },
    type: 'Feature'
  };
  var featureCentroid = {
    geometry: {
      coordinates: [],
      type: 'Point'
    },
    type: 'Feature'
  };
  var code = (function () {
    if (feature.properties && feature.properties.UNIT_CODE) {
      return feature.properties.UNIT_CODE.trim().toLowerCase();
    } else {
      return feature.features[0].properties.UNIT_CODE.trim().toLowerCase();
    }
  })();
  var path = 'data/parks/' + code + '.';

  if (feature.type === 'Feature') {
    bbox = new Terraformer.Feature(feature).bbox();
    featureBounds.properties = featureCentroid.properties = feature.properties;
  } else {
    bbox = new Terraformer.FeatureCollection(feature).bbox();
    featureBounds.properties = featureCentroid.properties = feature.features[0].properties;
  }

  featureCentroid.geometry.coordinates = [(bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2];
  centroids.features.push(featureCentroid);
  featureBounds.geometry.coordinates[0].push([bbox[0], bbox[1]]);
  featureBounds.geometry.coordinates[0].push([bbox[0], bbox[3]]);
  featureBounds.geometry.coordinates[0].push([bbox[2], bbox[3]]);
  featureBounds.geometry.coordinates[0].push([bbox[2], bbox[1]]);
  bounds.features.push(featureBounds);

  fs.writeFile(path + 'geojson', JSON.stringify(feature), 'utf8', function () {
    var feature2 = JSON.parse(JSON.stringify(feature));

    fs.writeFile(path + 'topojson', JSON.stringify(topojson.topology({
      collection: feature2
    }, {
      quantization: 1000000
    })), 'utf8', callback);
  });
}

// geoJson = shp.readFileSync('data/nps_boundary');


shp('data/nps_boundary/nps_boundary').then(function (geojson) {
  console.log(geojson);

  geoJson = geojson;

  /*
  for (var i = 0; i < geoJson.features.length; i++) {
    var feature = geoJson.features[i];
    var code = feature.properties.UNIT_CODE.trim();
    var existing = parks[code];
    var properties = feature.properties;

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

  processParks(needToProcess);
  */
});
interval = setInterval(function () {
  if (geoJson) {
    clearInterval(interval);
    console.log(geoJson);
  }
}, 100);
