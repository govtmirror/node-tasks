# update-fire-perimeters

This task pulls in the latest active fire polygons KML file from the GeoMac system, turns each polygon into individual GeoJSON/TopoJSON files, updates "active" and "historic" fire indexes, and commits/pushes updated data to the National Park Service data repository on GitHub: [https://github.com/nationalparkservice/data/tree/master/fire](https://github.com/nationalparkservice/data/tree/master/fire).

## Installation

    npm install
    node update.js

By default, the task will run every five minutes.