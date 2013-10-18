Ext.define('WildlandFire.view.grid.Panel.Community', {
  extend: 'Ext.grid.Panel',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Community');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'Unit_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unit ID',
        width: 100
      },{
        dataIndex: 'Community_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Community ID',
        width: 100
      },{
        dataIndex: 'C_CommonName',
        editor: {
          xtype: 'textfield'
        },
        header: 'Common Name',
        width: 100
      },{
        dataIndex: 'FieldCrew',
        editor: {
          xtype: 'textfield'
        },
        header: 'Field Crew',
        width: 100
      },{
        dataIndex: 'ExtentDesc',
        editor: {
          xtype: 'textfield'
        },
        header: 'Community Extent and Description',
        width: 100
      },{
        dataIndex: 'PrimaryAccess',
        editor: {
          xtype: 'textfield'
        },
        header: 'Primary Means of Access',
        width: 100
      },{
        dataIndex: 'IngressEgress',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Ingress and Egress',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'AccessWidth',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Width of Access Roads',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'AccessCond',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Condition of Access Roads',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'BridgeCond',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Bridge Condition',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Turnaround',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Access to Facilities and Turnarounds',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'BldgNum',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Facility Number and/or Sign',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'FuelLoad',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fuel Load within 300 ft',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'FuelType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fuel Type within 300 ft',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'DefensibleSpace',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Defensible Space',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Topography',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Predominate Slope within 300 ft',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'RoofMat',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Predominate Roof Material in Community',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'BldgConst',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Predominate Building Construction Material in Community',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Setback',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Community Setback from Slopes >30%',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Utility',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Placement of Utilities (Electric, Gas)',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'WaterSupply',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Water Supply',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'OverheadHaz',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Overhead Hazards',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'SafetyZone',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Safety Zones',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Obstacles',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Additional Obstacles Limiting Firefighting Efforts',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'FireOccur',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Historical Fire Occurrence',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'FireWeather',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Potential for Severe Fire Weather',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'BldgDens',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Building Density within Community',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'TopoFeat',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Topographical Features Influencing Fire Behavior',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Factors',
        editor: {
          xtype: 'textfield'
        },
        header: 'Factors Driving Ratings',
        width: 100
      },{
        dataIndex: 'TacticDesc',
        editor: {
          xtype: 'textfield'
        },
        header: 'Community Tactic Description',
        width: 100
      },{
        dataIndex: 'TreatDesc',
        editor: {
          xtype: 'textfield'
        },
        header: 'Community Treatment Description',
        width: 100
      },{
        dataIndex: 'C_AccProScore',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Access and Protection Score',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'C_Score',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Community Score',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'C_Rating',
        editor: {
          xtype: 'textfield'
        },
        header: 'Community Rating',
        width: 100
      },{
        dataIndex: 'RegionCode',
        editor: {
          xtype: 'textfield'
        },
        header: 'Region Code',
        width: 100
      },{
        dataIndex: 'GroupCode',
        editor: {
          xtype: 'textfield'
        },
        header: 'Group Code',
        width: 100
      },{
        dataIndex: 'UnitCode',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unit Code',
        width: 100
      },{
        dataIndex: 'Restriction',
        editor: {
          xtype: 'textfield'
        },
        header: 'Restriction',
        width: 100
      },{
        dataIndex: 'Map_Method',
        editor: {
          xtype: 'textfield'
        },
        header: 'Map Method',
        width: 100
      },{
        dataIndex: 'Data_Source',
        editor: {
          xtype: 'textfield'
        },
        header: 'Data Source',
        width: 100
      },{
        dataIndex: 'Source_Date',
        editor: {
          xtype: 'datefield'
        },
        header: 'Source Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'EditName',
        editor: {
          xtype: 'textfield'
        },
        header: 'Edit Name',
        width: 100
      },{
        dataIndex: 'Date_Current',
        editor: {
          xtype: 'datefield'
        },
        header: 'Edit Date',
        width: 100,
        xtype: 'datecolumn'
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
        header: 'Create Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'H_Accuracy',
        editor: {
          xtype: 'textfield'
        },
        header: 'Horizontal Accuracy',
        width: 100
      },{
        dataIndex: 'MetadataID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Metadata ID',
        width: 100
      },{
        dataIndex: 'GPS_AvgAcc',
        editor: {
          xtype: 'numberfield'
        },
        header: 'GPS_AvgAcc',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'GPS_PPAvgHAcc',
        editor: {
          xtype: 'numberfield'
        },
        header: 'GPS_PPAvgHAcc',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'GPS_VtxType',
        editor: {
          xtype: 'textfield'
        },
        header: 'GPS_VtxType',
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