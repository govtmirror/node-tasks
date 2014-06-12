Ext.define('FireOccurrence.view.grid.Panel.Fire Occurrence', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('FireOccurrence.store.Fire Occurrence');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'FireOccurID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Fire Occurence ID',
        width: 100
      },{
        dataIndex: 'FireDiscoveryDateTime',
        editor: {
          xtype: 'datefield'
        },
        header: 'Discovery Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'POOResponsibleUnit',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.POOResponsibleUnit
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Responsible Unit',
        width: 100
      },{
        dataIndex: 'ResponseReason',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.ResponseReason
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Response Reason',
        width: 100
      },{
        dataIndex: 'LocalIncidentIdentifier',
        editor: {
          xtype: 'textfield'
        },
        header: 'Local Incident ID',
        width: 100
      },{
        dataIndex: 'IncidentName',
        editor: {
          xtype: 'textfield'
        },
        header: 'Incident Name',
        width: 100
      },{
        dataIndex: 'FireCause',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.FireCause
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fire Cause',
        width: 100
      },{
        dataIndex: 'IncidentTypeKind',
        editor: {
          xtype: 'textfield'
        },
        header: 'Incident Type Kind',
        width: 100
      },{
        dataIndex: 'IncidentTypeCategory',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.IncidentTypeCategory
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Incident Category',
        width: 100
      },{
        dataIndex: 'PointType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.PointType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Point Type',
        width: 100
      },{
        dataIndex: 'InitialLatitude',
        editor: {
          xtype: 'numberfield'
        },
        header: 'InitialLatitude',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'InitialLongitude',
        editor: {
          xtype: 'numberfield'
        },
        header: 'InitialLongitude',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'DiscoveryAcres',
        editor: {
          xtype: 'numberfield'
        },
        header: 'DiscoveryAcres',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'CreateName',
        editor: {
          xtype: 'textfield'
        },
        header: 'Create Name',
        width: 100
      },{
        dataIndex: 'CreateDate',
        editor: {
          xtype: 'datefield'
        },
        header: 'CreateDate',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'EditName',
        editor: {
          xtype: 'textfield'
        },
        header: 'EditName',
        width: 100
      },{
        dataIndex: 'EditDate',
        editor: {
          xtype: 'datefield'
        },
        header: 'EditDate',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'IncidentCommanderName',
        editor: {
          xtype: 'textfield'
        },
        header: 'IC Name',
        width: 100
      },{
        dataIndex: 'FireLocation',
        editor: {
          xtype: 'textfield'
        },
        header: 'Fire Location',
        width: 100
      },{
        dataIndex: 'POOLatitude',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Latitude',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'POOLongitude',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Longitude',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'POOLandownerCategory',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.POOLandownerCategory
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'POOLandownerCategory',
        width: 100
      },{
        dataIndex: 'POOOwnerUnit',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.POOOwnerUnit
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'POOOwnerUnit',
        width: 100
      },{
        dataIndex: 'InitialRespDateTime',
        editor: {
          xtype: 'datefield'
        },
        header: 'Initial Attack Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'InitialResponseAcres',
        editor: {
          xtype: 'numberfield'
        },
        header: 'InitialResponseAcres',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'WUIIndicator',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.WUIIndicator
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'WUIIndicator',
        width: 100
      },{
        dataIndex: 'ResidencesThreatened',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Residences Threatened',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'OtherStructuresThreatened',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Other Structures Threatened',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'OtherValuesThreatened',
        editor: {
          xtype: 'textfield'
        },
        header: 'Other Values Threatened',
        width: 100
      },{
        dataIndex: 'MajorHazards',
        editor: {
          xtype: 'textfield'
        },
        header: 'Major Hazards',
        width: 100
      },{
        dataIndex: 'ResourceNeed',
        editor: {
          xtype: 'textfield'
        },
        header: 'Resource Need',
        width: 100
      },{
        dataIndex: 'InitialFireStrategy',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.InitialFireStrategy
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Initial Fire Strategy',
        width: 100
      },{
        dataIndex: 'InitialStrategyReason',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.InitialStrategyReason
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'InitialStrategyReason',
        width: 100
      },{
        dataIndex: 'NFDRSAdjRating',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.NFDRSAdjRating
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'NFDRS Adjective Rating',
        width: 100
      },{
        dataIndex: 'FireCharacter',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.FireCharacter
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'FireCharacter',
        width: 100
      },{
        dataIndex: 'FireIntensityLevel',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.FireIntensityLevel
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fire Intensity Level',
        width: 100
      },{
        dataIndex: 'AvgWindSpd',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Avg Wind Speed',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'WindDir',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.WindDir
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Wind Direction',
        width: 100
      },{
        dataIndex: 'Elevation',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Elevation',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Aspect',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.Aspect
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Aspect',
        width: 100
      },{
        dataIndex: 'Slope',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Slope',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'SlopePosition',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.SlopePosition
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Slope Position',
        width: 100
      },{
        dataIndex: 'POOFuelModel',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.POOFuelModel
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'NFDRS Fuel Model',
        width: 100
      },{
        dataIndex: 'FuelModel',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.FuelModel
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fuel Model',
        width: 100
      },{
        dataIndex: 'EstimatedContainmentDate',
        editor: {
          xtype: 'datefield'
        },
        header: 'Estimated Containment Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'EstimatedControlDate',
        editor: {
          xtype: 'datefield'
        },
        header: 'Estimated Control Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'ResourceOnScene',
        editor: {
          xtype: 'textfield'
        },
        header: 'Resources On Scene',
        width: 100
      },{
        dataIndex: 'UniqueFireIdentifier',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unique Fire ID',
        width: 100
      },{
        dataIndex: 'WFMI_Fire_ID',
        editor: {
          xtype: 'numberfield'
        },
        header: 'WFMI_Fire_ID',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'RegionCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.RegionCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Region Code',
        width: 100
      },{
        dataIndex: 'GroupCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.GroupCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Group Code',
        width: 100
      },{
        dataIndex: 'UnitCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.UnitCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'UnitCode',
        width: 100
      },{
        dataIndex: 'FireCode',
        editor: {
          xtype: 'textfield'
        },
        header: 'Fire Code',
        width: 100
      },{
        dataIndex: 'FireCauseCategory',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.FireCauseCategory
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fire Cause Category',
        width: 100
      },{
        dataIndex: 'IgnitionSourceKind',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.IgnitionSourceKind
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Ignition Source Kind',
        width: 100
      },{
        dataIndex: 'IgnitionSourceCategory',
        editor: {
          xtype: 'textfield'
        },
        header: 'Ignition Source Category',
        width: 100
      },{
        dataIndex: 'FirePrType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.FirePrType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fire Protection Type',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'FireYear',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Fire Year',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'ContainmentDateTime',
        editor: {
          xtype: 'datefield'
        },
        header: 'Containment Date Time',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'ControlDateTime',
        editor: {
          xtype: 'datefield'
        },
        header: 'Control Date Time',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'FireOutDateTime',
        editor: {
          xtype: 'datefield'
        },
        header: 'Out Date Time',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'FinalAcres',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Final Acres',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'FinalBlackAcres',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Final Black Acres',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'FireEscapeIndicator',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.FireEscapeIndicator
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fire Escape Indicator',
        width: 100
      },{
        dataIndex: 'ResidencesDestroyed',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Residences Destroyed',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'OtherStructuresDestroyed',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Other Structures Destroyed',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'SizeClass',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.SizeClass
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Size Class',
        width: 100
      },{
        dataIndex: 'AuthName',
        editor: {
          xtype: 'textfield'
        },
        header: 'Authorized Name',
        width: 100
      },{
        dataIndex: 'AuthDate',
        editor: {
          xtype: 'datefield'
        },
        header: 'Authorized Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'NFPORSTreatNumber',
        editor: {
          xtype: 'numberfield'
        },
        header: 'NFPORS Treatment Number',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'CompletionCode',
        editor: {
          xtype: 'textfield'
        },
        header: 'Completion Code',
        width: 100
      },{
        dataIndex: 'Merge_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Merge ID',
        width: 100
      },{
        dataIndex: 'IsComplex',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.IsComplex
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Is Complex',
        width: 100
      },{
        dataIndex: 'ComplexIRWINParentID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Complex ID',
        width: 100
      },{
        dataIndex: 'EscapeFireID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Escape Fire ID',
        width: 100
      },{
        dataIndex: 'Narrative',
        editor: {
          xtype: 'textfield'
        },
        header: 'Narrative',
        width: 100
      },{
        dataIndex: 'Perim_Extant',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.Perim_Extant
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Perimeter Extant',
        width: 100
      },{
        dataIndex: 'Restriction',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.Restriction
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Restriction',
        width: 100
      },{
        dataIndex: 'Map_Method',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.Map_Method
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Map Method',
        width: 100
      },{
        dataIndex: 'H_Accuracy',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.H_Accuracy
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Horizontal Accuracy',
        width: 100
      },{
        dataIndex: 'Comments',
        editor: {
          xtype: 'textfield'
        },
        header: 'Comments',
        width: 100
      },{
        dataIndex: 'MetadataID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Metadata ID',
        width: 100
      },{
        dataIndex: 'StatisticalCause',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Occurrence.StatisticalCause
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Statistical Cause',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'ComplexName',
        editor: {
          xtype: 'textfield'
        },
        header: 'ComplexName',
        width: 100
      }],
      dockedItems: [{
        displayInfo: true,
        dock: 'bottom',
        store: store,
        xtype: 'pagingtoolbar'
      }],
      store: store
    });
    me.callParent(arguments);
  }
});