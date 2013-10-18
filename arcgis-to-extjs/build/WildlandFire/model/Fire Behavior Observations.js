Ext.define('WildlandFire.model.Fire Behavior Observations', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'GeometryID',
    type: 'string',
    useNull: true
  },{
    name: 'FireName',
    type: 'string',
    useNull: true
  },{
    name: 'Un_Fire_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Unit_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Fire_Year',
    type: 'int',
    useNull: true
  },{
    name: 'Local_Inci_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Date',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'Time',
    type: 'int',
    useNull: true
  },{
    name: 'Elevation',
    type: 'int',
    useNull: true
  },{
    name: 'Aspect',
    type: 'int',
    useNull: true
  },{
    name: 'Slope',
    type: 'int',
    useNull: true
  },{
    name: 'FlameLength',
    type: 'float',
    useNull: true
  },{
    name: 'FlameZoneDepth',
    type: 'float',
    useNull: true
  },{
    name: 'RateOfSpread',
    type: 'float',
    useNull: true
  },{
    name: 'CrownFireType',
    type: 'string',
    useNull: true
  },{
    name: 'Spotting',
    type: 'string',
    useNull: true
  },{
    name: 'SpotDist',
    type: 'float',
    useNull: true
  },{
    name: 'PrimaryCarr',
    type: 'string',
    useNull: true
  },{
    name: 'FuelModel',
    type: 'string',
    useNull: true
  },{
    name: 'Comments',
    type: 'string',
    useNull: true
  },{
    name: 'Observer',
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
    name: 'MapMethod',
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
    name: 'Date_Current',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'H_Accuracy',
    type: 'string',
    useNull: true
  },{
    name: 'Restriction',
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
    name: 'FireType',
    type: 'string',
    useNull: true
  },{
    name: 'LatNAD83',
    type: 'float',
    useNull: true
  },{
    name: 'LongNAD83',
    type: 'float',
    useNull: true
  },{
    name: 'PK_GUID',
    type: 'undefined',
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
    baseUrl: NPMap.app.urls.Fire Behavior Observations,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'GeometryID',
    max: 50,
    type: 'length'
  },{
    field: 'FireName',
    type: 'presence'
  },{
    field: 'FireName',
    max: 50,
    type: 'length'
  },{
    field: 'Un_Fire_ID',
    max: 22,
    type: 'length'
  },{
    field: 'Unit_ID',
    max: 7,
    type: 'length'
  },{
    field: 'Local_Inci_ID',
    max: 10,
    type: 'length'
  },{
    field: 'Date',
    type: 'presence'
  },{
    field: 'Elevation',
    type: 'presence'
  },{
    field: 'Aspect',
    type: 'presence'
  },{
    field: 'CrownFireType',
    max: 8,
    type: 'length'
  },{
    field: 'Spotting',
    max: 3,
    type: 'length'
  },{
    field: 'PrimaryCarr',
    max: 50,
    type: 'length'
  },{
    field: 'FuelModel',
    max: 4,
    type: 'length'
  },{
    field: 'Comments',
    max: 500,
    type: 'length'
  },{
    field: 'Observer',
    max: 50,
    type: 'length'
  },{
    field: 'RegionCode',
    max: 3,
    type: 'length'
  },{
    field: 'GroupCode',
    max: 10,
    type: 'length'
  },{
    field: 'UnitCode',
    max: 10,
    type: 'length'
  },{
    field: 'MapMethod',
    max: 50,
    type: 'length'
  },{
    field: 'Data_Source',
    max: 50,
    type: 'length'
  },{
    field: 'H_Accuracy',
    max: 20,
    type: 'length'
  },{
    field: 'Restriction',
    max: 3,
    type: 'length'
  },{
    field: 'MetadataID',
    max: 50,
    type: 'length'
  },{
    field: 'FireType',
    max: 15,
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