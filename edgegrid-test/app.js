var EdgeGrid = require('edgegrid');

var eg = new EdgeGrid({
  path: './.edgerc'
});

eg.auth({
  body: {
    action: 'invalidate',
    objects: [
      'https://www.nps.gov/npmap/tools/npmap.js/index.html'
    ]
  },
  path: '/ccu/v2/queues/default',
  method: 'POST'
});
eg.send(function (data, response) {
  console.log(data);
  console.log(response);
});
