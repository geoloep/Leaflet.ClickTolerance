(function (factory, window) {

    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

    // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object' && !(window.test)) {
        module.exports = factory(require('leaflet'));
    } else {

    // attach your plugin to the global 'L' variable
        if (typeof L !== 'undefined') {
            factory(L);
        }
    }
}(function (L, proj4) {
    L.Path.include({
        _clickTolerance: function() {
            return (this.options.clickTolerance ? this.options.clickTolerance : 0) + (this.options.stroke ? this.options.weight / 2 : 0) + (L.Browser.touch ? 10 : 0);
        }
    });
}, window));
