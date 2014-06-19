/*
request = require('request');

request('http://views.cira.colostate.edu/fed/services/GetResults.aspx?action=getqueryresultsasjsonstring&cmdid=AirQualitySitesByDataset1&cmdfileid=ServiceSqlCommandFile', function(error, response) {
  console.log(response);

  if (!error && response.statusCode === 200) {
    var records = JSON.parse(response.body);

    console.log(records[0]);

    stream.once('open', function() {
      stream.write('callback(' + JSON.stringify(bounds) + ');');
      stream.end();
    });
  } else {
    console.log(response.statusCode);
  }
});
*/

var fs = require('fs');

fs.readFile('data/network-monitors.json', function(error, data) {
  var geometries = [],
      records = JSON.parse(data),
      stream = fs.createWriteStream('data/network-monitors.geojson');

  for (var i = 0; i < records.length; i++) {
    var record = records[i];

    geometries.push({
      "geometry": {
        "coordinates": [
          parseFloat(record.Longitude),
          parseFloat(record.Latitude)
        ],
        "type": "Point"
      },
      "properties": {
        "Site Name": record.SiteName,
        "Parameter": record.Parameter,
        "Dataset Code": record.DatasetCode,
        "ImNetworkID": record.ImNetworkID
        "Dataset ID": record.DatasetID,
        "ElevationMSL": parseInt(record.Elev, 10),
        "End Date": new Date(record.DataEndDate),
        "EPA Code": record.EPACode,
        "Site Code": record.SiteCode,
        "Site ID": record.SiteID,
        "Start Date": new Date(record.DataStartDate),
        "State": record.State,
        "State FIPS": record.StateFIPSCode,
        "Active": record.Active
      },
      "type": "Feature"
    });
  }

  stream.once('open', function() {
    stream.write('{"type":"FeatureCollection","features":' + JSON.stringify(geometries) + '}');
    stream.end();
  });
});