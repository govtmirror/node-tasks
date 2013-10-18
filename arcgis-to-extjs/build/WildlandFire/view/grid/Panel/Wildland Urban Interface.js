Ext.define('WildlandFire.view.grid.Panel.Wildland Urban Interface', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Wildland Urban Interface');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'WUI_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'WUI ID',
        width: 100
      },{
        dataIndex: 'Unit_ID_Type',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unit ID Type',
        width: 100
      },{
        dataIndex: 'Unit_ID',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Wildland Urban Interface.Unit_ID
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Unit ID',
        width: 100
      },{
        dataIndex: 'RegionCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Wildland Urban Interface.RegionCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Region Code',
        width: 100
      },{
        dataIndex: 'UnitCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Wildland Urban Interface.UnitCode
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
            data: NPMap.app.domains.Wildland Urban Interface.Restriction
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
            data: NPMap.app.domains.Wildland Urban Interface.Map_Method
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
            data: NPMap.app.domains.Wildland Urban Interface.Data_Source
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
        dataIndex: 'WUI_Source',
        editor: {
          xtype: 'textfield'
        },
        header: 'WUI Source Document',
        width: 100
      },{
        dataIndex: 'WUI_Source_Link',
        editor: {
          xtype: 'textfield'
        },
        header: 'WUI Source Link',
        width: 100
      },{
        dataIndex: 'GIS_Acres',
        editor: {
          xtype: 'numberfield'
        },
        header: 'GIS Acres',
        width: 100,
        xtype: 'numbercolumn'
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
            data: NPMap.app.domains.Wildland Urban Interface.H_Accuracy
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
        dataIndex: 'GroupCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Wildland Urban Interface.GroupCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Group Code',
        width: 100
      },{
        dataIndex: 'MetadataID',
        editor: {
          xtype: 'textfield'
        },
        header: 'MetadataID',
        width: 100
      },{
        dataIndex: 'EditName',
        editor: {
          xtype: 'textfield'
        },
        header: 'EditName',
        width: 100
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