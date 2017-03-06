'use strict';

describe('L.Path._clickTolerance', function() {
    var fixture = '<div id="map" style="width: 500px; height: 500px;"></div>';

    document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
    
    var map = L.map('map', {
        center: [0.0, 0.0],
        zoom: 3,
    });

    var layer = L.polyline([[0,0], [0,10]], {
        weight: 2,
    });

    it('should do nothing when clickTolerance options has not been set', function() {
        console.log(layer.options.weight)
        expect(layer._clickTolerance()).toBe((L.Browser.touch ? 11 : 1));
    });

    it('should add the value of the clickTolerance option to the result of _clickTolerance', function() {
        layer.options.clickTolerance = 10;
        expect(layer._clickTolerance()).toBe((L.Browser.touch ? 21 : 11));
    });
});