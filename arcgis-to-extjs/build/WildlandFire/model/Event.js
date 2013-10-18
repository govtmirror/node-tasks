Ext.define('WildlandFire.model.Event', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'GIS_Acres',
    type: 'float',
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
    name: 'Label',
    type: 'string',
    useNull: true
  },{
    name: 'Version',
    type: 'string',
    useNull: true
  },{
    name: 'FCategory',
    type: 'string',
    useNull: true
  },{
    name: 'MetadataID',
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
  },{
    name: 'NFPORS_Proj_ID',
    type: 'int',
    useNull: true
  },{
    name: 'EventID',
    type: 'string',
    useNull: true
  },{
    name: 'GlobalID',
    type: 'string',
    useNull: true
  },{
    name: 'WFMI_Fire_ID',
    type: 'int',
    useNull: true
  },{
    name: 'PK_GUID',
    type: 'undefined',
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
    name: 'Unit_ID',
    type: 'string',
    useNull: true
  },{
    name: 'External_ID',
    type: 'string',
    useNull: true
  },{
    name: 'External_ID2',
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
    name: 'CreateName',
    type: 'string',
    useNull: true
  },{
    name: 'Year',
    type: 'string',
    useNull: true
  },{
    name: 'NonWFMI_FireID',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Event,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Map_Method',
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
    field: 'Comments',
    max: 255,
    type: 'length'
  },{
    field: 'Label',
    max: 255,
    type: 'length'
  },{
    field: 'Version',
    max: 20,
    type: 'length'
  },{
    field: 'FCategory',
    max: 50,
    type: 'length'
  },{
    field: 'MetadataID',
    max: 50,
    type: 'length'
  },{
    field: 'GPS_VtxType',
    max: 10,
    type: 'length'
  },{
    field: 'EventID',
    max: 50,
    type: 'length'
  },{
    field: 'RegionCode',
    max: 5,
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
    field: 'Restriction',
    max: 3,
    type: 'length'
  },{
    field: 'Unit_ID',
    max: 7,
    type: 'length'
  },{
    field: 'External_ID',
    max: 50,
    type: 'length'
  },{
    field: 'External_ID2',
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
  },{
    field: 'Year',
    max: 4,
    type: 'length'
  },{
    field: 'NonWFMI_FireID',
    max: 50,
    type: 'length'
  }]
});