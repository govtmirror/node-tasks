Ext.define('WildlandFire.view.grid.Panel.Fire Behavior Observations', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Fire Behavior Observations');

    Ext.applyIf(me, {
      columns: [{
        dataIndex: 'GeometryID',
        editor: {
          xtype: 'textfield'
        },
        header: 'GeometryID',
        width: 100
      },{
        dataIndex: 'FireName',
        editor: {
          allowBlank: false,
    xtype: 'textfield'
        },
        header: 'FireName',
        width: 100
      },{
        dataIndex: 'Un_Fire_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unique Fire ID yyyy-parkcode-ncidentnumber (2011-UTZIP-0015)',
        width: 100
      },{
        dataIndex: 'Unit_ID',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.Unit_ID
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'NWCG Unit ID',
        width: 100
      },{
        dataIndex: 'Fire_Year',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Fire_Year',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Local_Inci_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Local Incident ID',
        width: 100
      },{
        dataIndex: 'Date',
        editor: {
          allowBlank: false,
    xtype: 'datefield'
        },
        header: 'Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'Time',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Time',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Elevation',
        editor: {
          allowBlank: false,
    xtype: 'numberfield'
        },
        header: 'Elevation',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Aspect',
        editor: {
          allowBlank: false,
    displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.Aspect
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Aspect',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Slope',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Slope',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'FlameLength',
        editor: {
          xtype: 'numberfield'
        },
        header: 'FlameLength',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'FlameZoneDepth',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Flame Zone',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'RateOfSpread',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Rate Of Spread',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'CrownFireType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.CrownFireType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'CrownFireType',
        width: 100
      },{
        dataIndex: 'Spotting',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.Spotting
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Spotting',
        width: 100
      },{
        dataIndex: 'SpotDist',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Spotting Distance-nearest 0.1mi (0-1mi), nearest 0.25mi (1-2mi), nearest 1mi (>2mi)',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'PrimaryCarr',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.PrimaryCarr
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'PrimaryCarrier',
        width: 100
      },{
        dataIndex: 'FuelModel',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.FuelModel
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'FuelModel',
        width: 100
      },{
        dataIndex: 'Comments',
        editor: {
          xtype: 'textfield'
        },
        header: 'Comments',
        width: 100
      },{
        dataIndex: 'Observer',
        editor: {
          xtype: 'textfield'
        },
        header: 'Observer',
        width: 100
      },{
        dataIndex: 'RegionCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.RegionCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'RegionCode',
        width: 100
      },{
        dataIndex: 'GroupCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.GroupCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'GroupCode',
        width: 100
      },{
        dataIndex: 'UnitCode',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.UnitCode
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'UnitCode',
        width: 100
      },{
        dataIndex: 'MapMethod',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.MapMethod
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'MapMethod',
        width: 100
      },{
        dataIndex: 'Data_Source',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.Data_Source
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Data_Source',
        width: 100
      },{
        dataIndex: 'Source_Date',
        editor: {
          xtype: 'datefield'
        },
        header: 'Source_Date',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'Date_Current',
        editor: {
          xtype: 'datefield'
        },
        header: 'Date_Current',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'H_Accuracy',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.H_Accuracy
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'H_Accuracy',
        width: 100
      },{
        dataIndex: 'Restriction',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.Restriction
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Restriction',
        width: 100
      },{
        dataIndex: 'MetadataID',
        editor: {
          xtype: 'textfield'
        },
        header: 'MetadataID',
        width: 100
      },{
        dataIndex: 'FireType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Fire Behavior Observations.FireType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Fire Type',
        width: 100
      },{
        dataIndex: 'LatNAD83',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Lat NAD83',
        width: 100,
        xtype: 'numbercolumn'
      },{
        dataIndex: 'LongNAD83',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Long NAD83',
        width: 100,
        xtype: 'numbercolumn'
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