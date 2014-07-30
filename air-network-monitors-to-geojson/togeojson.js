
var fs = require('fs'),
filename = 'data/network-monitors.json';

fs.readFile(filename, 'utf-8', function(err, data) {
  if (err) throw err;

  var info = [],
  records = JSON.parse(data);

  for (var i = 0; i < records.length; i++) {
    var record = records[i];

    if (record.Latitude !== null && record.Latitude !== null) {
      var linkyLink = {
        'AQS': 'http://www.nature.nps.gov/assets/intercept/?addr=http://www.epa.gov/airdata/',
        'CASTNET':'http://www.nature.nps.gov/assets/intercept/?addr=http://epa.gov/castnet/javaweb/index.html',
        'NADP/NTN':'http://www.nature.nps.gov/assets/intercept/?addr=http://epa.gov/castnet/javaweb/index.html',
        'NADP/MDN':'http://www.nature.nps.gov/assets/intercept/?addr=http://nadp.sws.uiuc.edu/MDN/',
        'NADP/AmoN':'http://www.nature.nps.gov/assets/intercept/?addr=http://nadp.sws.uiuc.edu/AMoN/',
        'IMPROVE':'http://www.nature.nps.gov/assets/intercept/?addr=http://vista.cira.colostate.edu/improve/data/data.htm'
      };

      var order = {
        'Gaseous Ammonia': 1,
        'Wet Mercury Deposition': 2,
        'Visibility': 3,
        'Wet Sulfur and Nitrogen Deposition': 4,
        'Ozone':5
      }

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
          "DataAccess": record.DataAccess,
          "Link": linkyLink[record.DataAccess],
          "ImNetworkID": nettyNetworkID[record.ImNetworkID],
          "SiteID": record.SiteID,
          "SiteCode": record.SiteCode,
          "EPACode": record.EPACode,
          "SiteName": record.SiteName,
          "Parameter": record.Parameter,
          "DatasetCode": record.DatasetCode,
          "DatasetID": record.DatasetID,
          "Elevation": parseInt(record.ElevationMSL, 10),
          "EndDate": new Date(record.DataEndDate),
          "StartDate": new Date(record.DataStartDate),
          "Active": record.Active,
          "Order": order[record.Parameter]
        },
        "type": "Feature"
      });
    }
  }

  fs.writeFile('data/network-monitors.geojson', '{"type":"FeatureCollection","features":' + JSON.stringify(info) + '}');
});
