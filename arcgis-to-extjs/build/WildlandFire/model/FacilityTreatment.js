Ext.define('WildlandFire.model.FacilityTreatment', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'Treatment_ID',
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
    name: 'NFPORS_TRT_ID',
    type: 'string',
    useNull: true
  },{
    name: 'VisitType',
    type: 'string',
    useNull: true
  },{
    name: 'Zone',
    type: 'int',
    useNull: true
  },{
    name: 'Treatment',
    type: 'string',
    useNull: true
  },{
    name: 'Pers_Hours',
    type: 'float',
    useNull: true
  },{
    name: 'Treat_Cycle',
    type: 'float',
    useNull: true
  },{
    name: 'Treat_Units',
    type: 'string',
    useNull: true
  },{
    name: 'Date_Next',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'Treat_Status',
    type: 'string',
    useNull: true
  },{
    name: 'Date_Implement',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'Treat_Priority',
    type: 'string',
    useNull: true
  },{
    name: 'TreatDesc',
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
    name: 'Treat_Acres',
    type: 'float',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.FacilityTreatment,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Treatment_ID',
    type: 'presence'
  },{
    field: 'Treatment_ID',
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
    field: 'NFPORS_TRT_ID',
    max: 50,
    type: 'length'
  },{
    field: 'VisitType',
    max: 50,
    type: 'length'
  },{
    field: 'Treatment',
    max: 100,
    type: 'length'
  },{
    field: 'Treat_Units',
    max: 50,
    type: 'length'
  },{
    field: 'Treat_Status',
    max: 50,
    type: 'length'
  },{
    field: 'Treat_Priority',
    max: 50,
    type: 'length'
  },{
    field: 'TreatDesc',
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
  }]
});