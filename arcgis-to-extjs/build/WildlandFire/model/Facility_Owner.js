Ext.define('WildlandFire.model.Facility_Owner', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'Fire_Bldg_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Owner_Name',
    type: 'string',
    useNull: true
  },{
    name: 'Owner_Addr',
    type: 'string',
    useNull: true
  },{
    name: 'Owner_City',
    type: 'string',
    useNull: true
  },{
    name: 'Owner_State',
    type: 'string',
    useNull: true
  },{
    name: 'Owner_Zip',
    type: 'string',
    useNull: true
  },{
    name: 'Owner_Phone',
    type: 'string',
    useNull: true
  },{
    name: 'Owner_Email',
    type: 'string',
    useNull: true
  },{
    name: 'GlobalID',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Facility_Owner,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Fire_Bldg_ID',
    max: 50,
    type: 'length'
  },{
    field: 'Owner_Name',
    max: 50,
    type: 'length'
  },{
    field: 'Owner_Addr',
    max: 50,
    type: 'length'
  },{
    field: 'Owner_City',
    max: 50,
    type: 'length'
  },{
    field: 'Owner_State',
    max: 2,
    type: 'length'
  },{
    field: 'Owner_Zip',
    max: 10,
    type: 'length'
  },{
    field: 'Owner_Phone',
    max: 14,
    type: 'length'
  },{
    field: 'Owner_Email',
    max: 50,
    type: 'length'
  }]
});