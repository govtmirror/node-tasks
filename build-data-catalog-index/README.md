## Not Yet Implemented

- Thumbnails for ArcGisServer, CartoDb, and GitHub

## Notes

- A property, <code>npmap-account</code>, is added to each layer. This property contains the name of the parent TileStream account that each layer is part of.

## Index

The update catalog task creates a search index that is used by the insidemapservices.nps.gov, mapservices.nps.gov, and NPMap Builder interfaces. This catalog is a JSONP file that contains an array of layer objects that look like the following:

    {
      // For ArcGisServer layers, this will be the base endpoint for the ArcGisServer instance. For CartoDb, GitHub, and TileStream layers, this is the parent account name.
      "a": "nps",
      // The description of the layer.
      "d": "The layer description goes here.",
      // The thumbnail URL.
      "i": "http://a.tiles.mapbox.com/v3/nps.aqrv-lulc/thumb.png)",
      // The name of the layer.
      "n": "SP Mask Wyoming",
      // The type of layer: "a" for ArcGisServer, "c" for CartoDb, "g" for GitHub, and "t" for TileStream.
      "t": "a|"c"|"g"|"t"
    }

## Layer Types

### ArcGisServer

The update catalog task:

- Excludes service endpoints that are contained in the "Service" folder of an ArcGIS Server instance
- Walks through all folders, including nested folders, and adds all services that are contained in the folders to the index

### CartoDb

### GitHub

### TileStream