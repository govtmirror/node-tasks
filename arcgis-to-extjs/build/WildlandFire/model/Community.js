Ext.define('WildlandFire.model.Community', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'Unit_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Community_ID',
    type: 'string',
    useNull: true
  },{
    name: 'C_CommonName',
    type: 'string',
    useNull: true
  },{
    name: 'FieldCrew',
    type: 'string',
    useNull: true
  },{
    name: 'ExtentDesc',
    type: 'string',
    useNull: true
  },{
    name: 'PrimaryAccess',
    type: 'string',
    useNull: true
  },{
    name: 'IngressEgress',
    type: 'int',
    useNull: true
  },{
    name: 'AccessWidth',
    type: 'int',
    useNull: true
  },{
    name: 'AccessCond',
    type: 'int',
    useNull: true
  },{
    name: 'BridgeCond',
    type: 'int',
    useNull: true
  },{
    name: 'Turnaround',
    type: 'int',
    useNull: true
  },{
    name: 'BldgNum',
    type: 'int',
    useNull: true
  },{
    name: 'FuelLoad',
    type: 'int',
    useNull: true
  },{
    name: 'FuelType',
    type: 'int',
    useNull: true
  },{
    name: 'DefensibleSpace',
    type: 'int',
    useNull: true
  },{
    name: 'Topography',
    type: 'int',
    useNull: true
  },{
    name: 'RoofMat',
    type: 'int',
    useNull: true
  },{
    name: 'BldgConst',
    type: 'int',
    useNull: true
  },{
    name: 'Setback',
    type: 'int',
    useNull: true
  },{
    name: 'Utility',
    type: 'int',
    useNull: true
  },{
    name: 'WaterSupply',
    type: 'int',
    useNull: true
  },{
    name: 'OverheadHaz',
    type: 'int',
    useNull: true
  },{
    name: 'SafetyZone',
    type: 'int',
    useNull: true
  },{
    name: 'Obstacles',
    type: 'int',
    useNull: true
  },{
    name: 'FireOccur',
    type: 'int',
    useNull: true
  },{
    name: 'FireWeather',
    type: 'int',
    useNull: true
  },{
    name: 'BldgDens',
    type: 'int',
    useNull: true
  },{
    name: 'TopoFeat',
    type: 'int',
    useNull: true
  },{
    name: 'Factors',
    type: 'string',
    useNull: true
  },{
    name: 'TacticDesc',
    type: 'string',
    useNull: true
  },{
    name: 'TreatDesc',
    type: 'string',
    useNull: true
  },{
    name: 'C_AccProScore',
    type: 'int',
    useNull: true
  },{
    name: 'C_Score',
    type: 'int',
    useNull: true
  },{
    name: 'C_Rating',
    type: 'string',
    useNull: true
  },{
    name: 'RegionCode',
    type: 'string',
    useNull: true
  },{
    name: 'GroupCode',
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
    name: 'H_Accuracy',
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
    name: 'GPS_AvgAcc',
    type: 'float',
    useNull: true
  },{
    name: 'GPS_PPAvgHAcc',
    type: 'float',
    useNull: true
  },{
    name: 'GPS_VtxType',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Community,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Unit_ID',
    max: 7,
    type: 'presence'
  },{
    field: 'Community_ID',
    max: 50,
    type: 'presence'
  },{
    field: 'C_CommonName',
    max: 50,
    type: 'presence'
  },{
    field: 'FieldCrew',
    max: 25,
    type: 'presence'
  },{
    field: 'ExtentDesc',
    max: 3000,
    type: 'presence'
  },{
    field: 'PrimaryAccess',
    max: 10,
    type: 'presence'
  },{
    field: 'Factors',
    max: 1000,
    type: 'presence'
  },{
    field: 'TacticDesc',
    max: 3000,
    type: 'presence'
  },{
    field: 'TreatDesc',
    max: 3000,
    type: 'presence'
  },{
    field: 'C_Rating',
    max: 15,
    type: 'presence'
  },{
    field: 'RegionCode',
    max: 3,
    type: 'presence'
  },{
    field: 'GroupCode',
    max: 10,
    type: 'presence'
  },{
    field: 'UnitCode',
    max: 10,
    type: 'presence'
  },{
    field: 'Restriction',
    max: 3,
    type: 'presence'
  },{
    field: 'Map_Method',
    max: 50,
    type: 'presence'
  },{
    field: 'Data_Source',
    max: 50,
    type: 'presence'
  },{
    field: 'EditName',
    max: 50,
    type: 'presence'
  },{
    field: 'CreateName',
    max: 50,
    type: 'presence'
  },{
    field: 'H_Accuracy',
    max: 20,
    type: 'presence'
  },{
    field: 'MetadataID',
    max: 50,
    type: 'presence'
  },{
    field: 'GPS_VtxType',
    max: 10,
    type: 'presence'
  }]
});