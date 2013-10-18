Ext.define('WildlandFire.model.Treatment', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'PROJ_ID',
    type: 'undefined',
    useNull: true
  },{
    name: 'KP_AREA',
    type: 'int',
    useNull: true
  },{
    name: 'TRT_ID',
    type: 'undefined',
    useNull: true
  },{
    name: 'TRT_ID_B',
    type: 'string',
    useNull: true
  },{
    name: 'UNIT_ID_TYPE',
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
    name: 'GroupCode',
    type: 'string',
    useNull: true
  },{
    name: 'UnitCode',
    type: 'string',
    useNull: true
  },{
    name: 'TRT_NM',
    type: 'string',
    useNull: true
  },{
    name: 'CLASS',
    type: 'string',
    useNull: true
  },{
    name: 'CAT_NM',
    type: 'string',
    useNull: true
  },{
    name: 'TYPE_NAME',
    type: 'string',
    useNull: true
  },{
    name: 'FY_OBLI',
    type: 'int',
    useNull: true
  },{
    name: 'PLN_DT',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'INT_DT',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'CMP_DT',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'ACT_CMP_FY',
    type: 'int',
    useNull: true
  },{
    name: 'Perim_Extant',
    type: 'string',
    useNull: true
  },{
    name: 'Restriction',
    type: 'string',
    useNull: true
  },{
    name: 'IsWUI',
    type: 'string',
    useNull: true
  },{
    name: 'ACT_ACRES',
    type: 'float',
    useNull: true
  },{
    name: 'Comments',
    type: 'string',
    useNull: true
  },{
    name: 'Pre_Treat_FM',
    type: 'string',
    useNull: true
  },{
    name: 'Post_Treat_FM',
    type: 'string',
    useNull: true
  },{
    name: 'Date_Current',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'EventID',
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
  },{
    name: 'ACT_CMP_YR',
    type: 'int',
    useNull: true
  },{
    name: 'PROJ_NM',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Treatment,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'TRT_ID_B',
    max: 25,
    type: 'presence'
  },{
    field: 'UNIT_ID_TYPE',
    max: 5,
    type: 'presence'
  },{
    field: 'Unit_ID',
    max: 7,
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
    field: 'TRT_NM',
    max: 100,
    type: 'presence'
  },{
    field: 'CLASS',
    max: 12,
    type: 'presence'
  },{
    field: 'CAT_NM',
    max: 50,
    type: 'presence'
  },{
    field: 'TYPE_NAME',
    max: 50,
    type: 'presence'
  },{
    field: 'Perim_Extant',
    max: 3,
    type: 'presence'
  },{
    field: 'Restriction',
    max: 3,
    type: 'presence'
  },{
    field: 'IsWUI',
    max: 3,
    type: 'presence'
  },{
    field: 'Comments',
    max: 255,
    type: 'presence'
  },{
    field: 'Pre_Treat_FM',
    max: 50,
    type: 'presence'
  },{
    field: 'Post_Treat_FM',
    max: 50,
    type: 'presence'
  },{
    field: 'EventID',
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
    field: 'PROJ_NM',
    max: 100,
    type: 'presence'
  }]
});