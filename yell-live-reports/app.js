var fs = require('fs');
var json2csv = require('json2csv');
var request = require('request');

request('https://nps-yell.cartodb.com/api/v2/sql?q=begin;set%20local%20timezone%20to%20%27MST7MDT%27;SELECT%20campgrounds_and_lodging.name,campgrounds_and_lodging.type,to_char(campgrounds_and_lodging_status.fill_datetime,%20%27YYYY-MM-DD%20HH24:MI:SS%20TZ%27) as fill_datetime,campgrounds_and_lodging_status.updated_by%20FROM%20campgrounds_and_lodging,campgrounds_and_lodging_status%20WHERE%20campgrounds_and_lodging.npmap_id=campgrounds_and_lodging_status.npmap_id;end;', function (error, response) {
  var json = JSON.parse(response.body);
  var fieldNames = [];
  var rows = json.rows;

  for (var fieldName in json.fields) {
    fieldNames.push(fieldName);
  }

  if (error) {
    new Error(error);
  } else {
    json2csv({
      data: rows,
      fields: fieldNames
    }, function (error, csv) {
      if (error) {
        new Error(error);
      } else {
        fs.writeFile('data/yell-campgrounds-and-lodging-status.csv', csv);
      }
    });
  }
});
