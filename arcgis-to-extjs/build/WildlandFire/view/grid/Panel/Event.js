Ext.define('WildlandFire.view.grid.Panel.Event', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Event');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'GIS_Acres',
        editor: {
          xtype: 'numberfield'
        },
        header: 'GIS Acres',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'Map_Method',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Event.Map_Method
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
            data: NPMap.app.domains.Event.Data_Source
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
        dataIndex: 'Date_Current',
        editor: {
          xtype: 'datefield'
        },
        header: 'Date Current',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'H_Accuracy',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Event.H_Accuracy
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
        dataIndex: 'Label',
        editor: {
          xtype: 'textfield'
        },
        header: 'Label',
        width: 100
      },{
        dataIndex: 'Version',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Event.Version
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Version',
        width: 100
      },{
        dataIndex: 'FCategory',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Event.FCategory
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Feature Category',
        width: 100
      },{
        dataIndex: 'MetadataID',
        editor: {
          xtype: 'textfield'
        },
        header: 'MetadataID',
        width: 100
      },{
        dataIndex: 'GPS_AvgAcc',
        editor: {
          xtype: 'numberfield'
        },
        header: 'GPS Average Accuracy',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'GPS_PPAvgHAcc',
        editor: {
          xtype: 'numberfield'
        },
        header: 'GPS Post Process Accuracy',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'GPS_VtxType',
        editor: {
          xtype: 'textfield'
        },
        header: 'GPS Collection Type',
        width: 100
      },{
        dataIndex: 'NFPORS_Proj_ID',
        editor: {
          xtype: 'numberfield'
        },
        header: 'NFPORS Proj ID',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'EventID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Event ID',
        width: 100
      },{
        dataIndex: 'WFMI_Fire_ID',
        editor: {
          xtype: 'numberfield'
        },
        header: 'WFMI Fire ID',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'PK_GUID',
        editor: {
          xtype: 'numberfield'
        },
        header: 'PK_GUID',
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
            data: NPMap.app.domains.Event.RegionCode
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
            data: NPMap.app.domains.Event.GroupCode
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
            data: NPMap.app.domains.Event.UnitCode
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
            data: NPMap.app.domains.Event.Restriction
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Restriction',
        width: 100
      },{
        dataIndex: 'Unit_ID',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Event.Unit_ID
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Unit ID',
        width: 100
      },{
        dataIndex: 'External_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'External ID',
        width: 100
      },{
        dataIndex: 'External_ID2',
        editor: {
          xtype: 'textfield'
        },
        header: 'External ID 2',
        width: 100
      },{
        dataIndex: 'EditName',
        editor: {
          xtype: 'textfield'
        },
        header: 'EditName',
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
        dataIndex: 'CreateName',
        editor: {
          xtype: 'textfield'
        },
        header: 'CreateName',
        width: 100
      },{
        dataIndex: 'Year',
        editor: {
          xtype: 'textfield'
        },
        header: 'Year',
        width: 100
      },{
        dataIndex: 'NonWFMI_FireID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Non WFMI Fire ID',
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