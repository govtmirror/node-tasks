
var fs = require('fs'),
filename = 'data/network-monitors.json';

fs.readFile(filename, 'utf-8', function(err, data) {
  if (err) throw err;

  var info = [],
  records = JSON.parse(data);

  var endDate = function(){
    if (record.DataEndDate === '05/31/2013'){
      return '';
    } else {
      return record.DataEndDate;
    }
  };

  for (var i = 0; i < records.length; i++) {
    var record = records[i];

    if (record.Latitude !== null && record.Latitude !== null) {
      // var linkyLink = function(){
      //   if (record.DataAccess === ''){
      //     return '';
      //   } else if (record.DataAccess === '') {
      //     return '';
      //   } else if (record.DataAccess === ''){

      //   } else {
      //     return '';
      //   }
      // };

      var nettyNetworkID = {
        1: 'nccn',
        2: 'ncbn',
        3: 'htln',
        4: 'sodn',
        5: 'cupn',
        6: 'cakn',
        7: 'ncrn',
        8: 'ncpn',
        9: 'sfan',
        10: 'gryn',
        11: 'aphn',
        12: 'medn',
        13: 'swan',
        14: 'netn',
        15: 'scpn',
        16: 'pacn',
        17: 'glkn',
        18: 'guln',
        19: 'romn',
        20: 'sien',
        21: 'ermn',
        22: 'arcn',
        23: 'klmn',
        24: 'secn',
        25: 'ucbn',
        26: 'sopn',
        27: 'modn',
        28: 'sfcn',
        29: 'sean',
        30: 'midn',
        31: 'chdn',
        32: 'ngpn'
      };

      info.push({
        "geometry": {
          "coordinates": [
            parseFloat(record.Longitude),
            parseFloat(record.Latitude)
          ],
          "type": "Point"
        },
        "properties": {
          "ImNetworkID": nettyNetworkID[record.ImNetworkID],
          "Site ID": record.SiteID,
          "Site Code": record.SiteCode,
          "EPA Code": record.EPACode,
          "Site Name": record.SiteName,
          "Parameter": record.Parameter,
          "Dataset Code": record.DatasetCode,
          "Dataset ID": record.DatasetID,
          "Elevation": parseInt(record.ElevationMSL, 10),
          "End Date": new Date(record.DataEndDate),
          "Start Date": new Date(record.DataStartDate),
          "State": record.State,
          "State FIPS": record.StateFIPSCode,
          "Active": record.Active
        },
        "type": "Feature"
      });
    }
  }

  fs.writeFile('./sites.geojson', '{"type":"FeatureCollection","features":' + JSON.stringify(info) + '}');
});
