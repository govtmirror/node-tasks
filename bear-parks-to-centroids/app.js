var _ = require('underscore'),
  fs = require('fs'),
  request = require('request');

request('https://raw2.github.com/nationalparkservice/data/gh-pages/base_data/boundaries/parks/parks-centroids.geojson', function(error, response) {
  var centroids = JSON.parse(response.body),
    features = {
      features: [],
      type: 'FeatureCollection'
    };

  request('https://raw2.github.com/nationalparkservice/data/gh-pages/projects/natural_resource_stewardship_and_science/bear_parks.csv', function(error, response) {
    var data = [],
      rows = response.body.split('\n'),
      headers = rows[0];

    rows = _.rest(rows, 1);

    _.each(rows, function(row) {
      var obj = {};

      row = row.split(',');

      _.each(headers.split(','), function(header, i) {
        obj[header.replace('\r', '')] = row[i].replace('\r', '');
      });
      data.push(obj);
    });

    _.each(data, function(park) {
      for (var i = 0; i < centroids.features.length; i++) {
        var centroid = centroids.features[i];

        if (centroid.properties.UNIT_CODE.toLowerCase() === park.UnitCode.toLowerCase()) {
          features.features.push({
            geometry: centroid.geometry,
            properties: {
              UnitCode: park.UnitCode,
              UnitName: park.UnitName,
              UnitWebsite: park.Website.toLowerCase(),
              Black: park.Black === '1',
              BrownGrizzly: park.BrownGrizzly === '1',
              Polar: park.Polar === '1'
            },
            type: 'Feature'
          });
          break;
        }
      }
    });

    fs.writeFile('data/bear_parks.geojson', JSON.stringify(features));
  });
});
