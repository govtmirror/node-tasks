Ext.define('WildlandFire.view.grid.Panel.FacilityEquipment', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.FacilityEquipment');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'Tactic_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Tactic_ID',
        width: 100
      },{
        dataIndex: 'Treatment_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Treatment_ID',
        width: 100
      },{
        dataIndex: 'EquipType',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Equipment Type',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'EquipDesc',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.FacilityEquipment.EquipDesc
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Equipment Description (stocking location)',
        width: 100
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
        dataIndex: 'Equip_Quant',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Equip_Quant',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'NFES_Num',
        editor: {
          xtype: 'textfield'
        },
        header: 'NFES Catalog Item Number',
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