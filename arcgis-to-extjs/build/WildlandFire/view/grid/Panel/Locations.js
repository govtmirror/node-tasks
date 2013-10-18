Ext.define('WildlandFire.view.grid.Panel.Locations', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Locations');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'Site_ID',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Site_ID',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Location_Name',
        editor: {
          xtype: 'textfield'
        },
        header: 'Location_Name',
        width: 100
      },{
        dataIndex: 'Location_Type',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Locations.Location_Type
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Location_Type',
        width: 100
      },{
        dataIndex: 'Location_Notes',
        editor: {
          xtype: 'textfield'
        },
        header: 'Location_Notes',
        width: 100
      },{
        dataIndex: 'Location_Status',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Locations.Location_Status
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Location_Status',
        width: 100
      },{
        dataIndex: 'Location_Species',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Locations.Location_Species
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Location_Species',
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
        dataIndex: 'EditDate',
        editor: {
          xtype: 'datefield'
        },
        header: 'EditDate',
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
        dataIndex: 'Observers',
        editor: {
          xtype: 'textfield'
        },
        header: 'Observers',
        width: 100
      },{
        dataIndex: 'Observed_Date',
        editor: {
          xtype: 'datefield'
        },
        header: 'Observed_Date',
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