import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { transform } from 'ol/proj';
import { toLonLat } from 'ol/proj';

const vectorSource = new VectorSource();
const geoVectorSource = new VectorSource();

const vectorLayer = new VectorLayer({
  source: vectorSource
});
const iconStyle = new Style({
  image: new Icon({
    scale: 0.02,
    opacity: 1,
    src: 'https://w7.pngwing.com/pngs/174/589/png-transparent-arrow-direction-point-pointer-arrows-icon.png'
  })
});


const añadirMarcador = (lat: number, lon: number) => {
  const marker = new Feature({
    geometry: new Point(transform([lon, lat], 'EPSG:4326',
      'EPSG:3857')),
  });
  console.log(lon, lat);

  vectorSource.addFeature(marker);

}

const iconGeo = new Style({
  image: new Icon({
    scale: 0.1,
    opacity: 1,
    src: 'https://cdn-icons-png.flaticon.com/512/1047/1047701.png'
  })
});


const marcadorGeoloca = (latitude: number, longitude: number) => {
  const markergeo = new Feature({
    geometry: new Point(transform([longitude, latitude], 'EPSG:4326',
      'EPSG:3857')),
  });
  console.log(longitude, latitude);

  geoVectorSource.addFeature(markergeo);

}



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() data: any[];
  @Input() localitation: any[]
  map: Map;

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),

        new VectorLayer({
          source: vectorSource,
          style: iconStyle,
        }),
        new VectorLayer({
          source: geoVectorSource,
          style: iconGeo,
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 1
      })
    });

    this.map.on('singleclick', function (event) {
      var lonLat = toLonLat(event.coordinate);
      añadirMarcador(lonLat[0], lonLat[1]);
      marcadorGeoloca(lonLat[0], lonLat[1]);//

    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Estoy recibiendo una nueva ubicacion", changes["data"].currentValue[1], changes["data"].currentValue[0])
    añadirMarcador(changes["data"].currentValue[0], changes["data"].currentValue[1])
  }


}


