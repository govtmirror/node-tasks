var _ = require('underscore')._,
    count = 0,
    fs = require('fs'),
    interval,
    layers = {ArcGisOnline: [], ArcGisServer: [], CartoDb: [], GitHub: [], TileStream: []},
    request = require('request'),
    search = {ArcGisOnline: [], ArcGisServer: [], CartoDb: [], GitHub: [], TileStream: []},
    sources = {ArcGisOnline: [], ArcGisServer: ['http://mapservices.nps.gov/arcgis/rest/services'], CartoDb: ['nps'], GitHub: ['nationalparkservice'], TileStream: ['nps']};

/**
 *
 */
function loadArcGisServerEndpoint(url) {
  count++;

  request(url + '?f=json', function(error, response) {
    var data = JSON.parse(response.body),
        folders = data.folders,
        services = data.services;

    _.each(folders, function(folder) {
      processArcGisServerFolder(url, folder);
    });
    _.each(services, function(service) {
      processArcGisServerService(url, service);
    });

    count--;
  });
}
/**
 *
 */
function processArcGisServerFolder(url, name) {
  loadArcGisServerEndpoint(url + '/' + name);
}
/**
 *
 */
function processArcGisServerService(url, obj) {
  var name = obj.name,
      exclude = false;

  if (name.indexOf('/') !== -1) {
    var split = name.split('/');

    if (split[0].toLowerCase() === 'system') {
      exclude = true;
    } else {
      name = split[split.length - 1];
    }
  }

  if (!exclude) {
    count++;
    request(url + '/' + name + '/' + obj.type + '?f=json', function(error, response) {
      var layer = JSON.parse(response.body);

      layer['npmap-account'] = url;
      layer['npmap-description'] = null;
      layer['npmap-name'] = name;
      layer['npmap-thumbnail'] = null;
      layers.ArcGisServer.push(layer);
      count--;
    });
  }
}
/**
 *
 */
function processLayer(type, param) {
  switch (type) {
    case 'ArcGisOnline':
      break;
    case 'ArcGisServer':
      loadArcGisServerEndpoint(param);
      break;
    case 'CartoDb':
      count++;
      request('http://' + param + '.cartodb.com/api/v2/sql?q=SELECT description,name FROM public_tables', function(error, response) {
        _.each(JSON.parse(response.body).rows, function(layer) {
          layer['npmap-account'] = param;
          layer['npmap-description'] = layer.description;
          layer['npmap-name'] = layer.name;
          layer['npmap-thumbnail'] = null;
          layers.CartoDb.push(layer);
        });

        count--;
      });
      break;
    case 'GitHub':
      count++;
      count--;
      break;
    case 'TileStream':
      count++;
      request('http://api.tiles.mapbox.com/v3/' + param + '/tilesets.json', function(error, response) {
        _.each(JSON.parse(response.body), function(layer) {
          layer['npmap-account'] = param;
          layer['npmap-description'] = null;
          layer['npmap-name'] = layer.name;
          layer['npmap-thumbnail'] = 'http://a.tiles.mapbox.com/v3/' + layer.id + '/thumb.png';
          layers.TileStream.push(layer);
        });

        count--;
      });
      break;
  }
}

_.each(sources, function(value, key) {
  _.each(value, function(param) {
    processLayer(key, param);
  });
});

interval = setInterval(function() {
  if (count === 0) {
    var searchAll = [],
        streamSearchJson = fs.createWriteStream('build/search.json'),
        streamSearchJsonP = fs.createWriteStream('build/search.jsonp');

    clearInterval(interval);
    _.each(sources, function(value, key) {
      var lower = key.toLowerCase(),
          streamJson = fs.createWriteStream('build/' + lower + '.json'),
          streamJsonP = fs.createWriteStream('build/' + lower + '.jsonp'),
          streamSearchJson = fs.createWriteStream('build/' + lower + '-search.json'),
          streamSearchJsonP = fs.createWriteStream('build/' + lower + '-search.jsonp');

      _.each(layers[key], function(layer) {
        var obj = {
          a: layer['npmap-account'],
          i: layer['npmap-thumbnail'],
          n: layer['npmap-name']
        };

        search[key].push(obj);
        searchAll.push(_.extend(obj, {
          t: key
        }));
      });
      streamJson.once('open', function() {
        streamJson.write(JSON.stringify(layers[key]));
        streamJson.end();
      });
      streamJsonP.once('open', function() {
        streamJsonP.write('callback(' + JSON.stringify(layers[key]) + ');');
        streamJsonP.end();
      });
      streamSearchJson.once('open', function() {
        streamSearchJson.write(JSON.stringify(search[key]));
        streamSearchJson.end();
      });
      streamSearchJsonP.once('open', function() {
        streamSearchJsonP.write('callback(' + JSON.stringify(search[key]) + ');');
        streamSearchJsonP.end();
      });
    });
      // Iterate through all search objects and create JSON and JSONp here.
    streamSearchJson.once('open', function() {
      streamSearchJson.write(JSON.stringify(searchAll));
      streamSearchJson.end();
    });
    streamSearchJsonP.once('open', function() {
      streamSearchJsonP.write('callback(' + JSON.stringify(searchAll) + ');');
      streamSearchJsonP.end();
    });
  } else {
    console.log(count + ' requests remaining');
  }
}, 1000);