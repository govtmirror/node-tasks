Ext.define('WildlandFire.model.Fire Management Unit', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'FMU_ID',
    type: 'string',
    useNull: true
  },{
    name: 'FMU_Code',
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
    name: 'FMU_Desc',
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
    name: 'FMU_Source',
    type: 'string',
    useNull: true
  },{
    name: 'FMU_Source_Link',
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
    name: 'CreateName',
    type: 'string',
    useNull: true
  },{
    name: 'EditName',
    type: 'string',
    useNull: true
  },{
    name: 'CreateDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'GeometryID',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Fire Management Unit,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'FMU_ID',
    max: 50,
    type: 'length'
  },{
    field: 'FMU_Code',
    max: 32,
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
    field: 'FMU_Desc',
    max: 128,
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
    field: 'FMU_Source',
    max: 50,
    type: 'length'
  },{
    field: 'FMU_Source_Link',
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
    field: 'CreateName',
    max: 50,
    type: 'length'
  },{
    field: 'EditName',
    max: 50,
    type: 'length'
  },{
    field: 'GeometryID',
    max: 50,
    type: 'length'
  }]
});