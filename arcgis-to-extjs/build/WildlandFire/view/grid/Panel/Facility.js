Ext.define('WildlandFire.view.grid.Panel.Facility', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Facility');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'Unit_ID',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Unit_ID
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Unit ID',
        width: 100
      },{
        dataIndex: 'Fire_Bldg_ID',
        editor: {
          allowBlank: false,
    xtype: 'textfield'
        },
        header: 'Fire_Bldg_ID',
        width: 100
      },{
        dataIndex: 'Building_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Building ID',
        width: 100
      },{
        dataIndex: 'FMSS_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'FMSS ID',
        width: 100
      },{
        dataIndex: 'Community_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Community_ID',
        width: 100
      },{
        dataIndex: 'AssessScale',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.AssessScale
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Is the Facility in a Community?',
        width: 100
      },{
        dataIndex: 'Common_Name',
        editor: {
          xtype: 'textfield'
        },
        header: 'Common Name',
        width: 100
      },{
        dataIndex: 'Owner',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Owner
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Facility Owner',
        width: 100
      },{
        dataIndex: 'FaciltyType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.FaciltyType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Facility Type',
        width: 100
      },{
        dataIndex: 'FacilityUse',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.FacilityUse
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Building Use',
        width: 100
      },{
        dataIndex: 'BuildingOccupied',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.BuildingOccupied
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Building Occupied',
        width: 100
      },{
        dataIndex: 'FieldCrew',
        editor: {
          xtype: 'textfield'
        },
        header: 'Field Crew',
        width: 100
      },{
        dataIndex: 'PrimaryAccess',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.PrimaryAccess
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Primary Means of Access',
        width: 100
      },{
        dataIndex: 'IngressEgress',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.IngressEgress
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Ingress Egress',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'AccessWidth',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.AccessWidth
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Width of Access Road/Driveway',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'AccessCond',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.AccessCond
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Condition of Access Road/Driveway',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'BridgeCond',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.BridgeCond
          }),
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
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Turnaround
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Access to Facility and Turnarounds',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'BldgNum',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.BldgNum
          }),
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
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.FuelLoad
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fuel Load',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'FuelType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.FuelType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fuel Type',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'DefensibleSpace',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.DefensibleSpace
          }),
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
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Topography
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Topography',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'RoofMat',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.RoofMat
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Roof Material',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'SidingMat',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.SidingMat
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Siding Material',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Foundation',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Foundation
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Foundation',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Fencing',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Fencing
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fencing',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Firewood',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Firewood
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Firewood',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Propane',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Propane
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Propane',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Hazmat',
        editor: {
          xtype: 'textfield'
        },
        header: 'List Hazmat around Facility',
        width: 100
      },{
        dataIndex: 'WaterSupply',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.WaterSupply
          }),
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
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.OverheadHaz
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Overhead Hazard',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'SafetyZone',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.SafetyZone
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Safety Zone',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Obstacles',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Obstacles
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Obstacles',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'C_AccProScore',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Community Access and Protection Score',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'F_AccProScore',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Facility Access and Protection Score',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Score',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Score',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Rating',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Rating
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Rating',
        width: 100
      },{
        dataIndex: 'RegionCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.RegionCode
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
            data: NPMap.app.domains.Facility.GroupCode
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
            data: NPMap.app.domains.Facility.UnitCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Unit Code',
        width: 100
      },{
        dataIndex: 'Restriction',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Restriction
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
            data: NPMap.app.domains.Facility.Map_Method
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Map Method',
        width: 100
      },{
        dataIndex: 'Data_Source',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.Data_Source
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
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
        header: 'EditName',
        width: 100
      },{
        dataIndex: 'Date_Current',
        editor: {
          xtype: 'datefield'
        },
        header: 'Date Current',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'CreateName',
        editor: {
          xtype: 'textfield'
        },
        header: 'CreateName',
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
        dataIndex: 'H_Accuracy',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.H_Accuracy
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
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
        dataIndex: 'GPS_AvgACC',
        editor: {
          xtype: 'numberfield'
        },
        header: 'GPS_AvgACC',
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
      },{
        dataIndex: 'ProtectionLevel',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.ProtectionLevel
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Protection Level',
        width: 100
      },{
        dataIndex: 'ResOfCon',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Facility.ResOfCon
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Are special resources of concern present?',
        width: 100
      },{
        dataIndex: 'AssessComments',
        editor: {
          xtype: 'textfield'
        },
        header: 'Assessment Comments',
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