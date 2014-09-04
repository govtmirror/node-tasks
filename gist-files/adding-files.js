
var fs = require('fs'),
parse = require('csv-parse'),
input = './making-files/loop.csv';

fs.readFile(input, 'utf-8', function(err, data) {
  if (err) throw err;

  var datum = parse(data),
  records =datum.options.split('\n');

  for (var i = 0; i < records.length; i++) {
    var record = records[i];
    console.log(record);

    var file = fs.writeFile('/Users/NPSKatrina/NPMap/website/tools/npmap.js/api/examples/' + record + '.md', ''+
        '---'+
        'title: "' + record +' "'+
        'description: "Learn how to... "'+
        'layout: "npmap-examples"'+
        'category: "npmap.js"'+
        'tags:'+
          '- "Controls"'+
          '- "Legend"'+
          '- "ArcGISServer"'+
        'group: "Controls"'+
        'tools: '+
          '- "NPMap.js"'+
        'gist: "3ab119e82f2b155719df"'+
        '---');
      }
  });