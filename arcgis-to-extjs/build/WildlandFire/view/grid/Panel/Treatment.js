Ext.define('WildlandFire.view.grid.Panel.Treatment', {
  extend: 'Ext.grid.Panel',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Treatment');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'PROJ_ID',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Project ID',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'KP_AREA',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain'),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Key Point Area',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'TRT_ID',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Treatment ID',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'TRT_ID_B',
        editor: {
          xtype: 'textfield'
        },
        header: 'Treatment Database',
        width: 100
      },{
        dataIndex: 'UNIT_ID_TYPE',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unit ID Type',
        width: 100
      },{
        dataIndex: 'Unit_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unit ID',
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
        dataIndex: 'TRT_NM',
        editor: {
          xtype: 'textfield'
        },
        header: 'Treatment Name',
        width: 100
      },{
        dataIndex: 'CLASS',
        editor: {
          xtype: 'textfield'
        },
        header: 'Class',
        width: 100
      },{
        dataIndex: 'CAT_NM',
        editor: {
          xtype: 'textfield'
        },
        header: 'Category Name',
        width: 100
      },{
        dataIndex: 'TYPE_NAME',
        editor: {
          xtype: 'textfield'
        },
        header: 'Treatment Type',
        width: 100
      },{
        dataIndex: 'FY_OBLI',
        editor: {
          xtype: 'numberfield'
        },
        header: 'FY Obligated',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'PLN_DT',
        editor: {
          xtype: 'datefield'
        },
        header: 'Planned Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'INT_DT',
        editor: {
          xtype: 'datefield'
        },
        header: 'Initiated Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'CMP_DT',
        editor: {
          xtype: 'datefield'
        },
        header: 'Completed Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'ACT_CMP_FY',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Completed FY',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Perim_Extant',
        editor: {
          xtype: 'textfield'
        },
        header: 'Perimeter Extant',
        width: 100
      },{
        dataIndex: 'Restriction',
        editor: {
          xtype: 'textfield'
        },
        header: 'Restriction',
        width: 100
      },{
        dataIndex: 'IsWUI',
        editor: {
          xtype: 'textfield'
        },
        header: 'Is WUI',
        width: 100
      },{
        dataIndex: 'ACT_ACRES',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Actual Acres',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'Comments',
        editor: {
          xtype: 'textfield'
        },
        header: 'Comments',
        width: 100
      },{
        dataIndex: 'Pre_Treat_FM',
        editor: {
          xtype: 'textfield'
        },
        header: 'PreTreat FM',
        width: 100
      },{
        dataIndex: 'Post_Treat_FM',
        editor: {
          xtype: 'textfield'
        },
        header: 'PostTreat FM',
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
        dataIndex: 'EventID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Event ID',
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
      },{
        dataIndex: 'ACT_CMP_YR',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Completed Calendar Year',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'PROJ_NM',
        editor: {
          xtype: 'textfield'
        },
        header: 'Project Name',
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