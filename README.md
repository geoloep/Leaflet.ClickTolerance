# Leaflet.ClickTolerance
Adds a clickTolerance option to canvas powered layers. Increases the clickable area of vector layers beyond their visible extent. Useful when the stroke width of your vector layer is too narrow to create an usable clickable area.

Modern Leaflet allows you te set a global tolerance on the renderer ([Leaflet docs](https://leafletjs.com/reference.html#canvas)). This plugin could still be useful if you want to set different tolerances for individual layers. 

## Setup

### Standalone
Include the javascript file on your page after Leaflet.
```html
<script src="https://unpkg.com/leaflet-clicktolerance/src/index.js" />
```

### Node
Import the [leaflet-clicktolerance](https://www.npmjs.com/package/leaflet-clicktolerance) package.

```javascript
import 'leaflet';
import 'leaflet-clicktolerance';
```

## Usage
This plugin extends the [Path options](https://leafletjs.com/reference.html#path) with a new option "clickTolerance". Set this option for layers you want to increase the clickable area of.

```javascript
var layer = L.polyline([[0,0], [0,10]], {
    clickTolerance: 10,
});
```

Make sure you are using the canvas renderer

```javascript
const map = L.map('map', {
    preferCanvas: true
});
```

or 

```javascript
const map = L.map('map', {
    renderer: new L.Canvas()
});
```
