Ext.define('WildlandFire.view.grid.Panel.FacilityTactics', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.FacilityTactics');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'Tactic_ID',
        editor: {
          allowBlank: false,
    xtype: 'textfield'
        },
        header: 'Tactic_ID',
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
        dataIndex: 'Community_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Community_ID',
        width: 100
      },{
        dataIndex: 'TacticType',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Tactic Type',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Tactic',
        editor: {
          xtype: 'textfield'
        },
        header: 'Tactic',
        width: 100
      },{
        dataIndex: 'TacticDesc',
        editor: {
          xtype: 'textfield'
        },
        header: 'Tactic Description',
        width: 100
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
        header: 'Date_Current',
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
        dataIndex: 'Pers_Hours',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Pers_Hours',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'SZRadius',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Radius of Safety Zone (ft)',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'ResourceOnScene1',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.FacilityTactics.ResourceOnScene1
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Resource On Scene',
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