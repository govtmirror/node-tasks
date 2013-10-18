/** 
 * This code is written against an ArcGIS Server 10.11 REST endpoint.
 */
var _ = require('underscore')._,
    endpoint = 'http://insidemapservices.nps.gov/arcgis/rest/services/Testing/WildlandFireFeature/FeatureServer/1',
    entityName,
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    namespace = 'WildlandFire',
    request = require('request');

/**
 *
 */
function getColumnWidth(header) {
  return 100;
}
/**
 *
 */
function getFieldType(type) {
  switch (type) {
    case 'esriFieldTypeDate':
      return 'date';
    case 'esriFieldTypeDouble':
      return 'float';
    case 'esriFieldTypeGlobalID':
      return 'string';
    case 'esriFieldTypeInteger':
      return 'int';
    case 'esriFieldTypeOID':
      return 'int';
    case 'esriFieldTypeSmallInteger':
      return 'int';
    case 'esriFieldTypeString':
      return 'string';
  }
}
/**
 *
 */
function setupDomain(field, stringColumnEditor) {
  return stringColumnEditor += 'displayField: \'name\',\n          editable: false,\n          queryMode: \'local\',\n          store: Ext.create(\'NPMap.advanced.store.ArcGisServerDomain\', {\n            data: NPMap.app.domains.' + entityName + '.' + field.name + '\n          }),\n          triggerAction: \'all\',\n          valueField: \'code\',\n          xtype: \'combobox\',\n    ';
}

request(endpoint + '?&f=json', function(error, response) {
  if (!error && response.statusCode === 200) {
    var meta = JSON.parse(response.body),
        columnsJson = [],
        fields = meta.fields,
        fieldsJson = [],
        gridStoresJson = [],
        hasDomain = false,
        stringColumns = '[',
        stringFields = '[',
        stringGridStores = '[',
        stringValidations = '[';

    entityName = meta.name;

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i],
          fieldAlias = field.alias,
          fieldName = field.name,
          fieldType = getFieldType(field.type),
          stringField = '{\n    name: \'' + fieldName + '\',\n    type: \'' + fieldType + '\',\n    useNull: true,\n    ';

      if (fieldName.toLowerCase() !== 'objectid' && fieldName.toLowerCase() !== 'globalid') {
        var stringColumn = '{\n        dataIndex: \'' + fieldName + '\',\n        {{editor}}header: \'' + fieldAlias + '\',\n        width: ' + getColumnWidth(fieldAlias) + ',\n        ',
            stringColumnEditor = '{\n          ';

        if (field.nullable === false) {
          stringColumnEditor += 'allowBlank: false,\n    ';
          stringValidations += '{\n    field: \'' + fieldName + '\',\n    type: \'presence\'\n  },';
        }

        if (fieldType === 'date') {
          stringColumn += 'xtype: \'datecolumn\',\n        ';
          stringColumnEditor += 'xtype: \'datefield\',\n    ';
          stringField += 'dateFormat: \'time\',\n    ';
        } else if (fieldType === 'string') {
          if (field.domain && field.domain.type === 'codedValue') {
            hasDomain = true;
            stringColumnEditor = setupDomain(field, stringColumnEditor);
          } else {
            stringColumnEditor += 'xtype: \'textfield\',\n    ';
          }

          stringValidations += '{\n    field: \'' + fieldName + '\',\n    max: ' + field.length + ',\n    type: \'length\'\n  },';
        } else {
          stringColumn += 'xtype: \'numbercolumn\',\n        ';

          if (field.domain && field.domain.type === 'codedValue') {
            hasDomain = true;
            stringColumnEditor = setupDomain(field, stringColumnEditor);
          } else {
            stringColumnEditor += 'xtype: \'numberfield\',\n    ';
          }

          if (fieldType === 'float') {

          } else {
            stringColumn += 'format: 0,\n        ';
          }
        }

        if (stringColumnEditor.length > 12) {
          stringColumnEditor = stringColumnEditor.slice(0, stringColumnEditor.length - 6) + '\n        }';
          stringColumn = stringColumn.replace('{{editor}}', 'editor: ' + stringColumnEditor + ',\n        ');
        } else {
          stringColumn = stringColumn.replace('{{editor}}', '');
        }

        stringColumn = stringColumn.slice(0, stringColumn.length - 10);
        stringColumns += stringColumn + '\n      },';
      }

      stringField = stringField.slice(0, stringField.length - 6);
      stringFields += stringField + '\n  },';
    }

    if (hasDomain && stringGridStores.indexOf('NPMap.advanced.store.ArcGisServerDomain') === -1) {
      stringGridStores += '\n    \'NPMap.advanced.store.ArcGisServerDomain\'\n   ';
    }

    if (stringColumns.length > 1) {
      stringColumns = stringColumns.slice(0, stringColumns.length - 1);
    }

    if (stringFields.length > 1) {
      stringFields = stringFields.slice(0, stringFields.length - 1);
    }

    if (stringGridStores.length > 1) {
      stringGridStores = stringGridStores.slice(0, stringGridStores.length - 1);
    }

    if (stringValidations.length > 1) {
      stringValidations = stringValidations.slice(0, stringValidations.length - 1);
    }

    stringColumns += ']';
    stringFields += ']';
    stringGridStores += ']';
    stringValidations += ']';

    mkdirp('build/' + namespace + '/model', function(err) {
      var stream = fs.createWriteStream('build/' + namespace + '/model/' + entityName + '.js');

      stream.once('open', function() {
        stream.write('Ext.define(\'' + namespace + '.model.' + entityName + '\', {\n  extend: \'Ext.data.Model\',\n  fields: ' + stringFields + ',\n  proxy: {\n    baseUrl: NPMap.app.urls.' + entityName + ',\n    type: \'arcgisserver\'\n  },\n  requires: [\n    \'NPMap.advanced.proxy.ArcGisServer\'\n  ],\n  validations: ' + stringValidations + '\n});');
        stream.end();
      });
    });
    mkdirp('build/' + namespace + '/store', function(err) {
      var stream = fs.createWriteStream('build/' + namespace + '/store/' + entityName + '.js');

      stream.once('open', function() {
        stream.write('Ext.define(\'' + namespace + '.store.' + entityName + '\', {\n  extend: \'Ext.data.Store\',\n  model: \'' + namespace + '.model.' + entityName + '\'\n});');
        stream.end();
      });
    });
    mkdirp('build/' + namespace + '/view/grid/Panel', function(err) {
      var stream = fs.createWriteStream('build/' + namespace + '/view/grid/Panel/' + entityName + '.js');

      stream.once('open', function() {
        stream.write('Ext.define(\'' + namespace + '.view.grid.Panel.' + entityName + '\', {\n  extend: \'NPMap.advanced.view.grid.ArcGisServer\',\n  stores: ' + stringGridStores + ',\n  initComponent: function() {\n    var me = this,\n        store = Ext.create(\'' + namespace + '.store.' + entityName + '\');\n\n    Ext.applyIf(me, {\n      columns: ' + stringColumns + ',\n      dockedItems: [{\n        displayInfo: true,\n        dock: \'bottom\',\n        store: store,\n        xtype: \'pagingtoolbar\'\n      }],\n      store: store\n    });\n    me.callParent(arguments);\n  }\n});');
        stream.end();
      });
    });
  } else {
    console.log(response.statusCode);
  }
});