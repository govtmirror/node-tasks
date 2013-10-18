Ext.define('WildlandFire.model.FacilityEquipment', {
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
    name: 'Treatment_ID',
    type: 'string',
    useNull: true
  },{
    name: 'EquipType',
    type: 'int',
    useNull: true
  },{
    name: 'EquipDesc',
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
    name: 'Equip_Quant',
    type: 'int',
    useNull: true
  },{
    name: 'NFES_Num',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.FacilityEquipment,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Tactic_ID',
    max: 50,
    type: 'length'
  },{
    field: 'Treatment_ID',
    max: 50,
    type: 'length'
  },{
    field: 'EquipDesc',
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
    field: 'NFES_Num',
    max: 12,
    type: 'length'
  }]
});