Ext.define('WildlandFire.view.grid.Panel.FacilityTreatment', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.FacilityTreatment');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'Treatment_ID',
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
        dataIndex: 'NFPORS_TRT_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'NFPORS_ID',
        width: 100
      },{
        dataIndex: 'VisitType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.FacilityTreatment.VisitType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Site Visit Type',
        width: 100
      },{
        dataIndex: 'Zone',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Zone',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Treatment',
        editor: {
          xtype: 'textfield'
        },
        header: 'Treatment',
        width: 100
      },{
        dataIndex: 'Pers_Hours',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Person Hours',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'Treat_Cycle',
        editor: {
          xtype: 'numberfield'
        },
        header: 'until Return',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'Treat_Units',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.FacilityTreatment.Treat_Units
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Units for Treatment Cycle',
        width: 100
      },{
        dataIndex: 'Date_Next',
        editor: {
          xtype: 'datefield'
        },
        header: 'Date Next Treatment Recommended',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'Treat_Status',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.FacilityTreatment.Treat_Status
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Treatment Status',
        width: 100
      },{
        dataIndex: 'Date_Implement',
        editor: {
          xtype: 'datefield'
        },
        header: 'Date Implemented',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'Treat_Priority',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.FacilityTreatment.Treat_Priority
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Treatment Priority',
        width: 100
      },{
        dataIndex: 'TreatDesc',
        editor: {
          xtype: 'textfield'
        },
        header: 'Treatment Description',
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
        dataIndex: 'Treat_Acres',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Treatment acres',
        width: 100,
        xtype: 'numbercolumn'
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