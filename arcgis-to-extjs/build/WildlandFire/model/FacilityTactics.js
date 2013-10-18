Ext.define('WildlandFire.model.FacilityTactics', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'Tactic_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Fire_Bldg_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Community_ID',
    type: 'string',
    useNull: true
  },{
    name: 'TacticType',
    type: 'int',
    useNull: true
  },{
    name: 'Tactic',
    type: 'string',
    useNull: true
  },{
    name: 'TacticDesc',
    type: 'string',
    useNull: true
  },{
    name: 'EditName',
    type: 'string',
    useNull: true
  },{
    name: 'Date_Current',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'CreateName',
    type: 'string',
    useNull: true
  },{
    name: 'CreateDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'GlobalID',
    type: 'string',
    useNull: true
  },{
    name: 'Pers_Hours',
    type: 'float',
    useNull: true
  },{
    name: 'SZRadius',
    type: 'int',
    useNull: true
  },{
    name: 'ResourceOnScene1',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.FacilityTactics,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Tactic_ID',
    type: 'presence'
  },{
    field: 'Tactic_ID',
    max: 50,
    type: 'length'
  },{
    field: 'Fire_Bldg_ID',
    type: 'presence'
  },{
    field: 'Fire_Bldg_ID',
    max: 50,
    type: 'length'
  },{
    field: 'Community_ID',
    max: 50,
    type: 'length'
  },{
    field: 'Tactic',
    max: 255,
    type: 'length'
  },{
    field: 'TacticDesc',
    max: 3000,
    type: 'length'
  },{
    field: 'EditName',
    max: 50,
    type: 'length'
  },{
    field: 'CreateName',
    max: 50,
    type: 'length'
  },{
    field: 'ResourceOnScene1',
    max: 20,
    type: 'length'
  }]
});