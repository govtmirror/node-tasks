Ext.define('WildlandFire.view.grid.Panel.Smoke Observations', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Smoke Observations');

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
          xtype: 'textfield'
        },
        header: 'FireName',
        width: 100
      },{
        dataIndex: 'Un_Fire_ID',
        editor: {
          xtype: 'textfield'
        },
        header: 'Unique Fire ID, yyyy-NWCGUnitID-LocalIncidentID',
        width: 100
      },{
        dataIndex: 'Unit_ID',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Smoke Observations.Unit_ID
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
          xtype: 'numberfield'
        },
        header: 'Elevation (in feet)',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'AvgWindSpeed',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Average Wind Speed',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'MaxWindSpeed',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Max Wind Speed',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'WindDir',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Smoke Observations.WindDir
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'WindDir',
        width: 100
      },{
        dataIndex: 'DirOfSmkCol',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Smoke Observations.DirOfSmkCol
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Direction of Smoke Column',
        width: 100
      },{
        dataIndex: 'AltOfSmkCol',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Altitude of Smoke Column (AGL in feet)',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'AltOfInvLyr',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Altitude of Inversion Layer (AGL in feet)',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'PlumeType',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Smoke Observations.PlumeType
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Plume Type',
        width: 100
      },{
        dataIndex: 'SmkSensAreas',
        editor: {
          xtype: 'textfield'
        },
        header: 'SmkSensAreas',
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
            data: NPMap.app.domains.Smoke Observations.RegionCode
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
            data: NPMap.app.domains.Smoke Observations.GroupCode
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
            data: NPMap.app.domains.Smoke Observations.UnitCode
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
            data: NPMap.app.domains.Smoke Observations.MapMethod
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
            data: NPMap.app.domains.Smoke Observations.Data_Source
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
            data: NPMap.app.domains.Smoke Observations.H_Accuracy
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
            data: NPMap.app.domains.Smoke Observations.Restriction
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