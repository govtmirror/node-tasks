
var fs = require('fs'),
request = require('request'),
url = 'http://views.cira.colostate.edu/fed/services/GetResults.aspx?action=getqueryresultsasjsonstring&cmdid=AirQualitySitesByDataset1&cmdfileid=ServiceSqlCommandFile&dsidse=10001';

request(url + '?format=json', function(error, response, body){
  if (!error && response.statusCode === 200) {
    var data = JSON.parse(response.body);
    console.log(data[0]);
    console.log(data);

    stream.once('open', function() {
      stream.write('callback(' + JSON.stringify(bounds) + ');');
      stream.end();
    }
  }
});

//     stream.once('open', function() {
//       stream.write('callback(' + JSON.stringify(bounds) + ');');
//       stream.end();
//     });
//   } else {
//     console.log(response.statusCode);
    // }

// fs.readFile('data/network-monitors.json', function(error, data) {
//   var geometries = [],
//       stream = fs.createWriteStream('data/network-monitors.geojson'),
//       records = JSON.parse(data);

//   for (var i = 0; i < records.length; i++) {
//     var record = records[i];

//     geometries.push({
//       'geometry': {
//         'coordinates': [
//           parseFloat(record.Lon),
//           parseFloat(record.Lat)
//         ],
//         'type': 'Point',
//       },
//       'properties': {
        // 'County FIPS': record.CountyFIPS,
        // 'Country': record.Country,
        // 'Dataset Code': record.DatasetCode,
        // 'Dataset ID': record.DatasetID,
        // 'Dataset Name': record.DatasetName,
        // 'Elevation': parseInt(record.Elev, 10),
        // 'End Date': new Date(record.End),
        // 'EPA Code': record.EPACode,
        // 'Frequency': record.Freq,
        // 'Site Code': record.SiteCode,
        // 'Site ID': record.SiteID,
        // 'Site Name': record.SiteName,
        // 'Start Date': new Date(record.Start),
        // 'State': record.State,
//         'State FIPS': record.StateFIPS
//       },
//       'type': 'Feature'
//     });
//   }

//   stream.once('open', function() {
//     stream.write('{"type":"FeatureCollection","features":' + JSON.stringify(geometries) + '}');
//     stream.end();
//   });
// });