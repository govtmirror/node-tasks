
var fs = require('fs'),
filename = 'data/monitoring_sites.json';

fs.readFile(filename, function(err, data) {
  if (err) throw err;

  var info = [],
  records = JSON.parse(data);

  for (var i = 0; i < records.length; i++) {
    var record = records[i];

    info.push({
      'y': parseFloat(record.Longitude),
      'x': parseFloat(record.Latitude),
      'i': record.ImNetworkID,
      'c': record.DatasetCodes,
      'd': record.DataAccess,
      'e': parseInt(record.ElevationMSL, 10),
      't': record.DataEndDate,
      'p': record.Parameter,
      'z': record.SiteCode,
      'a': record.SiteName,
      's': record.DataStartDate
    });
  }

  fs.writeFile('data/air-sites.json', JSON.stringify(info));
});