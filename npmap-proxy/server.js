var _ = require('underscore'),
  cache = require('memory-cache'),
  connect = require('connect'),
  gzip = require('connect-gzip'),
  json3 = require('json3'),
  pd = require('pretty-data').pd,
  request = require('request'),
  url = require('url');

function cleanString(str) {
  return str.replace(/\n/g, '\\n').replace(/\"/g, '\\"');
}

connect.createServer(gzip.gzip(), function(req, res) {
  var params = url.parse(req.url, true).query,
    apiCallback = params.callback,
    apiType = params.type,
    apiUrl = params.url;

  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'text/javascript');

  if (!apiCallback) {
    res.end('{"error": "The \'callback\' parameter is required."}');
  } else if (!apiType) {
    res.end('{"error": "The \'type\' parameter is required."}');
  } else if (!apiUrl) {
    res.end('{"error": "The \'url\' parameter is required."}');
  } else {
    var cached = cache.get(apiUrl);

    if (cached && typeof cached === 'string' && cached.length > 0) {
      cache.put(apiUrl, cached, 120000);
      //res.end(apiCallback + '(' + (apiType === 'json' ? '' : '"') + cached + (apiType === 'json' ? '' : '"') + ');');
      res.end('cached');
    } else {
      var externalReqHeaders = _.omit(req.headers, 'accept-encoding', 'connection', 'cookie', 'host', 'user-agent');

      request({
        encoding: 'utf8',
        headers: externalReqHeaders,
        strictSSL: false,
        uri: apiUrl
      }, function(error, response, body) {
        if (error) {
          //res.end(apiCallback + '({"error":"Error!!!!!","success":false});');
          res.end('no good');
        } else {
          var text;

          switch (apiType) {
          case 'json':
            /*
            try {
              body = json3.stringify(json3.parse(body));
              text = body;
            } catch (e) {
              text = body;
            }
            */
            text = body;
            break;
          case 'text':
            text = cleanString(body);
            break;
          case 'xml':
            text = cleanString(pd.xmlmin(body));
            break;
          }

          cache.put(apiUrl, text, 120000);
          //res.end(apiCallback + '(' + (apiType === 'json' ? '' : '"') + text + (apiType === 'json' ? '' : '"') + ');');
          res.end('new');
        }
      });
    }
  }
}).listen(process.env.PORT || 8000);
