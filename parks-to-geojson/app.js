// TODO: Extend this to include park attributes pulled in from CartoDB.

var bounds = {
    features: [],
    type: 'FeatureCollection'
  },
  centroids = {
    features: [],
    type: 'FeatureCollection'
  },
  fs = require('fs'),
  geoJson,
  needToProcess = [],
  parks = {},
  shp = require('shp'),
  Terraformer = require('terraformer'),
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
    var path = 'data/parks';

    fs.writeFile(path + '.geojson', JSON.stringify(geoJson), function() {
      fs.writeFile(path + '.topojson', JSON.stringify(topojson.topology({
        collection: geoJson
      }, {
        quantization: 1000000
      })), function() {
        fs.writeFile(path + '-bounds.geojson', JSON.stringify(bounds));
        fs.writeFile(path + '-centroids.geojson', JSON.stringify(centroids));
      });
    });
  }
}
function processParks(park) {
  var bbox,
    feature = JSON.parse(JSON.stringify(needToProcess.shift())),
    featureBounds = {
      geometry: {
        coordinates: [[]],
        type: 'Polygon'
      },
      type: 'Feature'
    },
    featureCentroid = {
      geometry: {
        coordinates: [],
        type: 'Point'
      },
      type: 'Feature'
    },
    code = (function() {
      if (feature.properties && feature.properties.UNIT_CODE) {
        return feature.properties.UNIT_CODE.trim().toLowerCase();
      } else {
        return feature.features[0].properties.UNIT_CODE.trim().toLowerCase();
      }
    })(),
    path = 'data/parks/' + code + '.';

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

  fs.writeFile(path + 'geojson', JSON.stringify(feature), 'utf8', function() {
    var feature2 = JSON.parse(JSON.stringify(feature));

    fs.writeFile(path + 'topojson', JSON.stringify(topojson.topology({
      collection: feature2
    }, {
      quantization: 1000000
    })), 'utf8', callback);
  });
}

processParks(needToProcess);
