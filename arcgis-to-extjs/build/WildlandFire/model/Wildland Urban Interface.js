Ext.define('WildlandFire.model.Wildland Urban Interface', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'WUI_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Unit_ID_Type',
    type: 'string',
    useNull: true
  },{
    name: 'Unit_ID',
    type: 'string',
    useNull: true
  },{
    name: 'RegionCode',
    type: 'string',
    useNull: true
  },{
    name: 'UnitCode',
    type: 'string',
    useNull: true
  },{
    name: 'Restriction',
    type: 'string',
    useNull: true
  },{
    name: 'Map_Method',
    type: 'string',
    useNull: true
  },{
    name: 'Data_Source',
    type: 'string',
    useNull: true
  },{
    name: 'Source_Date',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'WUI_Source',
    type: 'string',
    useNull: true
  },{
    name: 'WUI_Source_Link',
    type: 'string',
    useNull: true
  },{
    name: 'GIS_Acres',
    type: 'float',
    useNull: true
  },{
    name: 'Date_Current',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'H_Accuracy',
    type: 'string',
    useNull: true
  },{
    name: 'Comments',
    type: 'string',
    useNull: true
  },{
    name: 'GroupCode',
    type: 'string',
    useNull: true
  },{
    name: 'MetadataID',
    type: 'string',
    useNull: true
  },{
    name: 'GlobalID',
    type: 'string',
    useNull: true
  },{
    name: 'EditName',
    type: 'string',
    useNull: true
  },{
    name: 'CreateName',
    type: 'string',
    useNull: true
  },{
    name: 'CreateDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Wildland Urban Interface,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'WUI_ID',
    max: 50,
    type: 'length'
  },{
    field: 'Unit_ID_Type',
    max: 5,
    type: 'length'
  },{
    field: 'Unit_ID',
    max: 7,
    type: 'length'
  },{
    field: 'RegionCode',
    max: 3,
    type: 'length'
  },{
    field: 'UnitCode',
    max: 10,
    type: 'length'
  },{
    field: 'Restriction',
    max: 3,
    type: 'length'
  },{
    field: 'Map_Method',
    max: 50,
    type: 'length'
  },{
    field: 'Data_Source',
    max: 50,
    type: 'length'
  },{
    field: 'WUI_Source',
    max: 50,
    type: 'length'
  },{
    field: 'WUI_Source_Link',
    max: 255,
    type: 'length'
  },{
    field: 'H_Accuracy',
    max: 20,
    type: 'length'
  },{
    field: 'Comments',
    max: 255,
    type: 'length'
  },{
    field: 'GroupCode',
    max: 10,
    type: 'length'
  },{
    field: 'MetadataID',
    max: 50,
    type: 'length'
  },{
    field: 'EditName',
    max: 50,
    type: 'length'
  },{
    field: 'CreateName',
    max: 50,
    type: 'length'
  }]
});