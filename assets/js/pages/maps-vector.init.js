/*
Template Name: Simple - Responsive 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: vector map js
*/

import jsVectorMap  from "jsvectormap";
import 'jsvectormap/dist/css/jsvectormap.min.css'

console.info(jsVectorMap);
window.jsVectorMap = jsVectorMap;

import 'jsvectormap/dist/maps/world.js'
import 'jsvectormap/dist/maps/world-merc.js'

class VectorMap {

    initWorldMapMarker() {
        const map = new jsVectorMap({
            map: 'world',
            selector: '#world-map-markers',
            zoomOnScroll: false,
            zoomButtons: true,
            markersSelectable: true,
            markers: [
                { name: "Greenland", coords: [72, -42] },
                { name: "Canada", coords: [56.1304, -106.3468] },
                { name: "Brazil", coords: [-14.2350, -51.9253] },
                { name: "Egypt", coords: [26.8206, 30.8025] },
                { name: "Russia", coords: [61, 105] },
                { name: "China", coords: [35.8617, 104.1954] },
                { name: "United States", coords: [37.0902, -95.7129] },
                { name: "Norway", coords: [60.472024, 8.468946] },
                { name: "Ukraine", coords: [48.379433, 31.16558] },
            ],
            markerStyle: {
                initial: { fill: "#3073F1" },
                selected: { fill: "#3073f16e" }
            },
            labels: {
                markers: {
                    render: marker => marker.name
                }
            }
        });
    }

    initWordMapMercVectorMap() {
        const map = new jsVectorMap({
            map: 'world_merc',
            selector: '#world-merc-map-markers',
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#3073F1'
                }
            }
        });
    }

    init() {
        this.initWorldMapMarker();
        this.initWordMapMercVectorMap();
    }

}

document.addEventListener('DOMContentLoaded', function (e) {
    new VectorMap().init();
});
