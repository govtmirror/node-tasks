Ext.define('WildlandFire.model.Fire Occurrence', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'FireOccurID',
    type: 'string',
    useNull: true
  },{
    name: 'FireDiscoveryDateTime',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'POOResponsibleUnit',
    type: 'string',
    useNull: true
  },{
    name: 'ResponseReason',
    type: 'string',
    useNull: true
  },{
    name: 'LocalIncidentIdentifier',
    type: 'string',
    useNull: true
  },{
    name: 'IncidentName',
    type: 'string',
    useNull: true
  },{
    name: 'FireCause',
    type: 'string',
    useNull: true
  },{
    name: 'IncidentTypeKind',
    type: 'string',
    useNull: true
  },{
    name: 'IncidentTypeCategory',
    type: 'string',
    useNull: true
  },{
    name: 'PointType',
    type: 'string',
    useNull: true
  },{
    name: 'InitialLatitude',
    type: 'float',
    useNull: true
  },{
    name: 'InitialLongitude',
    type: 'float',
    useNull: true
  },{
    name: 'DiscoveryAcres',
    type: 'float',
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
    name: 'EditName',
    type: 'string',
    useNull: true
  },{
    name: 'EditDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'IncidentCommanderName',
    type: 'string',
    useNull: true
  },{
    name: 'FireLocation',
    type: 'string',
    useNull: true
  },{
    name: 'POOLatitude',
    type: 'float',
    useNull: true
  },{
    name: 'POOLongitude',
    type: 'float',
    useNull: true
  },{
    name: 'POOLandownerCategory',
    type: 'string',
    useNull: true
  },{
    name: 'POOOwnerUnit',
    type: 'string',
    useNull: true
  },{
    name: 'InitialRespDateTime',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'InitialResponseAcres',
    type: 'float',
    useNull: true
  },{
    name: 'WUIIndicator',
    type: 'string',
    useNull: true
  },{
    name: 'ResidencesThreatened',
    type: 'int',
    useNull: true
  },{
    name: 'OtherStructuresThreatened',
    type: 'int',
    useNull: true
  },{
    name: 'OtherValuesThreatened',
    type: 'string',
    useNull: true
  },{
    name: 'MajorHazards',
    type: 'string',
    useNull: true
  },{
    name: 'ResourceNeed',
    type: 'string',
    useNull: true
  },{
    name: 'InitialFireStrategy',
    type: 'string',
    useNull: true
  },{
    name: 'InitialStrategyReason',
    type: 'string',
    useNull: true
  },{
    name: 'NFDRSAdjRating',
    type: 'string',
    useNull: true
  },{
    name: 'FireCharacter',
    type: 'string',
    useNull: true
  },{
    name: 'FireIntensityLevel',
    type: 'string',
    useNull: true
  },{
    name: 'AvgWindSpd',
    type: 'int',
    useNull: true
  },{
    name: 'WindDir',
    type: 'string',
    useNull: true
  },{
    name: 'Elevation',
    type: 'int',
    useNull: true
  },{
    name: 'Aspect',
    type: 'string',
    useNull: true
  },{
    name: 'Slope',
    type: 'int',
    useNull: true
  },{
    name: 'SlopePosition',
    type: 'string',
    useNull: true
  },{
    name: 'POOFuelModel',
    type: 'string',
    useNull: true
  },{
    name: 'FuelModel',
    type: 'string',
    useNull: true
  },{
    name: 'EstimatedContainmentDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'EstimatedControlDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'ResourceOnScene',
    type: 'string',
    useNull: true
  },{
    name: 'UniqueFireIdentifier',
    type: 'string',
    useNull: true
  },{
    name: 'WFMI_Fire_ID',
    type: 'int',
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
    name: 'FireCode',
    type: 'string',
    useNull: true
  },{
    name: 'FireCauseCategory',
    type: 'string',
    useNull: true
  },{
    name: 'IgnitionSourceKind',
    type: 'string',
    useNull: true
  },{
    name: 'IgnitionSourceCategory',
    type: 'string',
    useNull: true
  },{
    name: 'FirePrType',
    type: 'int',
    useNull: true
  },{
    name: 'FireYear',
    type: 'int',
    useNull: true
  },{
    name: 'ContainmentDateTime',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'ControlDateTime',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'FireOutDateTime',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'FinalAcres',
    type: 'float',
    useNull: true
  },{
    name: 'FinalBlackAcres',
    type: 'float',
    useNull: true
  },{
    name: 'FireEscapeIndicator',
    type: 'string',
    useNull: true
  },{
    name: 'ResidencesDestroyed',
    type: 'int',
    useNull: true
  },{
    name: 'OtherStructuresDestroyed',
    type: 'int',
    useNull: true
  },{
    name: 'SizeClass',
    type: 'string',
    useNull: true
  },{
    name: 'AuthName',
    type: 'string',
    useNull: true
  },{
    name: 'AuthDate',
    type: 'date',
    useNull: true,
    dateFormat: 'time'
  },{
    name: 'NFPORSTreatNumber',
    type: 'int',
    useNull: true
  },{
    name: 'CompletionCode',
    type: 'string',
    useNull: true
  },{
    name: 'Merge_ID',
    type: 'string',
    useNull: true
  },{
    name: 'IsComplex',
    type: 'string',
    useNull: true
  },{
    name: 'ComplexIRWINParentID',
    type: 'string',
    useNull: true
  },{
    name: 'EscapeFireID',
    type: 'string',
    useNull: true
  },{
    name: 'Narrative',
    type: 'string',
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
    name: 'Map_Method',
    type: 'string',
    useNull: true
  },{
    name: 'H_Accuracy',
    type: 'string',
    useNull: true
  },{
    name: 'Comments',
    type: 'string',
    useNull: true
  },{
    name: 'MetadataID',
    type: 'string',
    useNull: true
  },{
    name: 'StatisticalCause',
    type: 'int',
    useNull: true
  },{
    name: 'GlobalID',
    type: 'string',
    useNull: true
  },{
    name: 'OBJECTID',
    type: 'int',
    useNull: true
  },{
    name: 'ComplexName',
    type: 'string',
    useNull: true
  }],
  proxy: {
    baseUrl: NPMap.app.urls.Fire Occurrence,
    type: 'arcgisserver'
  },
  requires: [
    'NPMap.advanced.proxy.ArcGisServer'
  ],
  validations: [{
    field: 'FireOccurID',
    max: 50,
    type: 'length'
  },{
    field: 'POOResponsibleUnit',
    max: 7,
    type: 'length'
  },{
    field: 'ResponseReason',
    max: 50,
    type: 'length'
  },{
    field: 'LocalIncidentIdentifier',
    max: 10,
    type: 'length'
  },{
    field: 'IncidentName',
    max: 50,
    type: 'length'
  },{
    field: 'FireCause',
    max: 15,
    type: 'length'
  },{
    field: 'IncidentTypeKind',
    max: 2,
    type: 'length'
  },{
    field: 'IncidentTypeCategory',
    max: 2,
    type: 'length'
  },{
    field: 'PointType',
    max: 16,
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
    field: 'IncidentCommanderName',
    max: 50,
    type: 'length'
  },{
    field: 'FireLocation',
    max: 255,
    type: 'length'
  },{
    field: 'POOLandownerCategory',
    max: 7,
    type: 'length'
  },{
    field: 'POOOwnerUnit',
    max: 7,
    type: 'length'
  },{
    field: 'WUIIndicator',
    max: 1,
    type: 'length'
  },{
    field: 'OtherValuesThreatened',
    max: 255,
    type: 'length'
  },{
    field: 'MajorHazards',
    max: 255,
    type: 'length'
  },{
    field: 'ResourceNeed',
    max: 255,
    type: 'length'
  },{
    field: 'InitialFireStrategy',
    max: 3,
    type: 'length'
  },{
    field: 'InitialStrategyReason',
    max: 50,
    type: 'length'
  },{
    field: 'NFDRSAdjRating',
    max: 10,
    type: 'length'
  },{
    field: 'FireCharacter',
    max: 25,
    type: 'length'
  },{
    field: 'FireIntensityLevel',
    max: 20,
    type: 'length'
  },{
    field: 'WindDir',
    max: 30,
    type: 'length'
  },{
    field: 'Aspect',
    max: 50,
    type: 'length'
  },{
    field: 'SlopePosition',
    max: 25,
    type: 'length'
  },{
    field: 'POOFuelModel',
    max: 1,
    type: 'length'
  },{
    field: 'FuelModel',
    max: 4,
    type: 'length'
  },{
    field: 'ResourceOnScene',
    max: 50,
    type: 'length'
  },{
    field: 'UniqueFireIdentifier',
    max: 22,
    type: 'length'
  },{
    field: 'RegionCode',
    max: 4,
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
    field: 'FireCode',
    max: 4,
    type: 'length'
  },{
    field: 'FireCauseCategory',
    max: 20,
    type: 'length'
  },{
    field: 'IgnitionSourceKind',
    max: 30,
    type: 'length'
  },{
    field: 'IgnitionSourceCategory',
    max: 30,
    type: 'length'
  },{
    field: 'FireEscapeIndicator',
    max: 1,
    type: 'length'
  },{
    field: 'SizeClass',
    max: 1,
    type: 'length'
  },{
    field: 'AuthName',
    max: 50,
    type: 'length'
  },{
    field: 'CompletionCode',
    max: 20,
    type: 'length'
  },{
    field: 'Merge_ID',
    max: 50,
    type: 'length'
  },{
    field: 'IsComplex',
    max: 1,
    type: 'length'
  },{
    field: 'ComplexIRWINParentID',
    max: 50,
    type: 'length'
  },{
    field: 'EscapeFireID',
    max: 50,
    type: 'length'
  },{
    field: 'Narrative',
    max: 2000,
    type: 'length'
  },{
    field: 'Perim_Extant',
    max: 1,
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
    field: 'H_Accuracy',
    max: 20,
    type: 'length'
  },{
    field: 'Comments',
    max: 255,
    type: 'length'
  },{
    field: 'MetadataID',
    max: 50,
    type: 'length'
  },{
    field: 'ComplexName',
    max: 50,
    type: 'length'
  }]
});