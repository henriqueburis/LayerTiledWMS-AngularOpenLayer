import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View'
import TileWMS from 'ol/source/TileWMS';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {


    var examplelayer = new TileLayer({
      source: new TileWMS({
        url: 'https://ahocevar.com/geoserver/wms',
        params: {
          'LAYERS': 'topp:states',
          'VERSION': '1.3.0',
          'FORMAT': 'image/png',
          'EPSG': '4326',
          'TILED': true
        },
        projection: 'EPSG:4326',
        serverType: 'geoserver'
      })
    });


    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()

        }),
        examplelayer
      ],
      view: new View({
        center: [-6124801.2015823, -1780692.0106836],
        zoom: 5
      })
    });
  }
}
