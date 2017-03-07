[![Build Status](https://travis-ci.org/geoloep/Leaflet.ClickTolerance.svg?branch=master)](https://travis-ci.org/geoloep/Leaflet.ClickTolerance)
# Leaflet.ClickTolerance
Adds a clickTolerance option to canvas powered layers. Increases the clickable area of vector layers beyond their visible extent. Useful when the stroke width of your vector layer is to narrow to create an usable clickable area.

## Setup

### Standalone
Include the javascript file on your page after Leaflet.

### Node
Require the [leaflet-clicktolerance](https://www.npmjs.com/package/leaflet-clicktolerance) package.

## Usage
This plugin extends the [Path options](http://leafletjs.com/reference-1.0.3.html#path) with a new option "clickTolerance". Set this option for layers you want to increase the clickable area of.

```javascript
var layer = L.polyline([[0,0], [0,10]], {
    clickTolerance: 10,
});
```

On touch enabled browser an additional tolerance is automatically added.