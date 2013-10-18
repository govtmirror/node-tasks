Ext.define('WildlandFire.view.grid.Panel.Weather Observations', {
  extend: 'NPMap.advanced.view.grid.ArcGisServer',
  stores: [
    'NPMap.advanced.store.ArcGisServerDomain'
  ],
  initComponent: function() {
    var me = this,
        store = Ext.create('WildlandFire.store.Weather Observations');

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
        header: 'Unique Fire ID',
        width: 100
      },{
        dataIndex: 'Unit_ID',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Weather Observations.Unit_ID
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Unit ID',
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
        header: 'Elevation',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Sheltering',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Weather Observations.Sheltering
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Sheltering',
        width: 100
      },{
        dataIndex: 'AvgWindSpd',
        editor: {
          xtype: 'numberfield'
        },
        header: 'AvgWindSpd',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'MaxWindSpd',
        editor: {
          xtype: 'numberfield'
        },
        header: 'MaxWindSpd',
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
            data: NPMap.app.domains.Weather Observations.WindDir
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'Wind Direction',
        width: 100
      },{
        dataIndex: 'DryBulb',
        editor: {
          xtype: 'numberfield'
        },
        header: 'DryBulb',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'WetBulb',
        editor: {
          xtype: 'numberfield'
        },
        header: 'WetBulb',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'RelHumidity',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Relative Humidity',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'DewPt',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Dew Point',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'Aspect',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Weather Observations.Aspect
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
        dataIndex: 'CloudCover',
        editor: {
          xtype: 'numberfield'
        },
        header: 'CloudCover',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'CanopyCover',
        editor: {
          xtype: 'numberfield'
        },
        header: 'CanopyCover',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'ElevChange',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Weather Observations.ElevChange
          }),
          triggerAction: 'all',
          valueField: 'code',
          xtype: 'combobox'
        },
        header: 'ElevChange',
        width: 100
      },{
        dataIndex: 'RefFuelMoist',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Reference fuel moisture',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'UnshdCorr',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Unshaded correction',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'ShdCorr',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Shaded correction',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'UnshdFDFM',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Unshaded Fine Dead Fuel Moisture',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'ShdFDFM',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Shaded Fine Dead Fuel Moisture',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'UnshdPIG',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Unshaded Prob of Ignition',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
      },{
        dataIndex: 'ShdPIG',
        editor: {
          xtype: 'numberfield'
        },
        header: 'Shaded Prob of Ignition',
        width: 100,
        xtype: 'numbercolumn',
        format: 0
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
            data: NPMap.app.domains.Weather Observations.RegionCode
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
            data: NPMap.app.domains.Weather Observations.GroupCode
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
            data: NPMap.app.domains.Weather Observations.UnitCode
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
            data: NPMap.app.domains.Weather Observations.MapMethod
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
            data: NPMap.app.domains.Weather Observations.Data_Source
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
        dataIndex: 'DateCurrent',
        editor: {
          xtype: 'datefield'
        },
        header: 'DateCurrent',
        width: 100,
        xtype: 'datecolumn'
      },{
        dataIndex: 'H_Accuracy',
        editor: {
          displayField: 'name',
          editable: false,
          queryMode: 'local',
          store: Ext.create('NPMap.advanced.store.ArcGisServerDomain', {
            data: NPMap.app.domains.Weather Observations.H_Accuracy
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
            data: NPMap.app.domains.Weather Observations.Restriction
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
        dataIndex: 'CreateName',
        editor: {
          xtype: 'textfield'
        },
        header: 'CreateName',
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