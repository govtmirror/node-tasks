Ext.define('WildlandFire.model.Facility', {
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
    name: 'Fire_Bldg_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Building_ID',
    type: 'string',
    useNull: true
  },{
    name: 'FMSS_ID',
    type: 'string',
    useNull: true
  },{
    name: 'Community_ID',
    type: 'string',
    useNull: true
  },{
    name: 'AssessScale',
    type: 'string',
    useNull: true
  },{
    name: 'Common_Name',
    type: 'string',
    useNull: true
  },{
    name: 'Owner',
    type: 'string',
    useNull: true
  },{
    name: 'FaciltyType',
    type: 'string',
    useNull: true
  },{
    name: 'FacilityUse',
    type: 'string',
    useNull: true
  },{
    name: 'BuildingOccupied',
    type: 'string',
    useNull: true
  },{
    name: 'FieldCrew',
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
    name: 'SidingMat',
    type: 'int',
    useNull: true
  },{
    name: 'Foundation',
    type: 'int',
    useNull: true
  },{
    name: 'Fencing',
    type: 'int',
    useNull: true
  },{
    name: 'Firewood',
    type: 'int',
    useNull: true
  },{
    name: 'Propane',
    type: 'int',
    useNull: true
  },{
    name: 'Hazmat',
    type: 'string',
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
    name: 'C_AccProScore',
    type: 'int',
    useNull: true
  },{
    name: 'F_AccProScore',
    type: 'int',
    useNull: true
  },{
    name: 'Score',
    type: 'int',
    useNull: true
  },{
    name: 'Rating',
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
    name: 'GPS_AvgACC',
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
    name: 'ProtectionLevel',
    type: 'string',
    useNull: true
  },{
    name: 'ResOfCon',
    type: 'string',
    useNull: true
  },{
    name: 'AssessComments',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Facility,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'Unit_ID',
    max: 7,
    type: 'length'
  },{
    field: 'Fire_Bldg_ID',
    type: 'presence'
  },{
    field: 'Fire_Bldg_ID',
    max: 50,
    type: 'length'
  },{
    field: 'Building_ID',
    max: 50,
    type: 'length'
  },{
    field: 'FMSS_ID',
    max: 100,
    type: 'length'
  },{
    field: 'Community_ID',
    max: 50,
    type: 'length'
  },{
    field: 'AssessScale',
    max: 10,
    type: 'length'
  },{
    field: 'Common_Name',
    max: 100,
    type: 'length'
  },{
    field: 'Owner',
    max: 20,
    type: 'length'
  },{
    field: 'FaciltyType',
    max: 20,
    type: 'length'
  },{
    field: 'FacilityUse',
    max: 50,
    type: 'length'
  },{
    field: 'BuildingOccupied',
    max: 4,
    type: 'length'
  },{
    field: 'FieldCrew',
    max: 25,
    type: 'length'
  },{
    field: 'PrimaryAccess',
    max: 10,
    type: 'length'
  },{
    field: 'Hazmat',
    max: 1000,
    type: 'length'
  },{
    field: 'Rating',
    max: 15,
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
    field: 'EditName',
    max: 50,
    type: 'length'
  },{
    field: 'CreateName',
    max: 50,
    type: 'length'
  },{
    field: 'H_Accuracy',
    max: 20,
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
    field: 'ProtectionLevel',
    max: 20,
    type: 'length'
  },{
    field: 'ResOfCon',
    max: 8,
    type: 'length'
  },{
    field: 'AssessComments',
    max: 2000,
    type: 'length'
  }]
});