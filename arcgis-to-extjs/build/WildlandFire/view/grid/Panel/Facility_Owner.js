Ext.define('WildlandFire.view.grid.Panel.Facility_Owner', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Facility_Owner');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'Fire_Bldg_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'GUID value, used as foreign key to relate to Facility feature class',
        width: 100
      },{
        dataIndex: 'Owner_Name',
        editor: {
          xtype: 'textfield'
        },
        header: 'Owner Name',
        width: 100
      },{
        dataIndex: 'Owner_Addr',
        editor: {
          xtype: 'textfield'
        },
        header: 'Owner Address',
        width: 100
      },{
        dataIndex: 'Owner_City',
        editor: {
          xtype: 'textfield'
        },
        header: 'Owner City',
        width: 100
      },{
        dataIndex: 'Owner_State',
        editor: {
          xtype: 'textfield'
        },
        header: 'Owner State',
        width: 100
      },{
        dataIndex: 'Owner_Zip',
        editor: {
          xtype: 'textfield'
        },
        header: 'Owner Zip',
        width: 100
      },{
        dataIndex: 'Owner_Phone',
        editor: {
          xtype: 'textfield'
        },
        header: 'Owner Phone',
        width: 100
      },{
        dataIndex: 'Owner_Email',
        editor: {
          xtype: 'textfield'
        },
        header: 'Owner Email',
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