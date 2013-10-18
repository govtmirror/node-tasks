Ext.define('WildlandFire.model.Locations', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'Site_ID',
    type: 'undefined',
    useNull: true
  },{
    name: 'Location_Name',
    type: 'string',
    useNull: true
  },{
    name: 'Location_Type',
    type: 'string',
    useNull: true
  },{
    name: 'Location_Notes',
    type: 'string',
    useNull: true
  },{
    name: 'GlobalID',
    type: 'string',
    useNull: true
  },{
    name: 'Location_Status',
    type: 'string',
    useNull: true
  },{
    name: 'Location_Species',
    type: 'string',
    useNull: true
  },{
    name: 'CreateDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'CreateName',
    type: 'string',
    useNull: true
  },{
    name: 'EditDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'EditName',
    type: 'string',
    useNull: true
  },{
    name: 'Observers',
    type: 'string',
    useNull: true
  },{
    name: 'Observed_Date',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Locations,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Location_Name',
    max: 128,
    type: 'length'
  },{
    field: 'Location_Type',
    max: 128,
    type: 'length'
  },{
    field: 'Location_Notes',
    max: 500,
    type: 'length'
  },{
    field: 'Location_Status',
    max: 50,
    type: 'length'
  },{
    field: 'Location_Species',
    max: 50,
    type: 'length'
  },{
    field: 'CreateName',
    max: 50,
    type: 'length'
  },{
    field: 'EditName',
    max: 50,
    type: 'length'
  },{
    field: 'Observers',
    max: 50,
    type: 'length'
  }]
});