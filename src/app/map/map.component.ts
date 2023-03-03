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
    scale: 0.03,
    opacity: 1,
    src: 'https://w7.pngwing.com/pngs/174/589/png-transparent-arrow-direction-point-pointer-arrows-icon.png'
  })
});


const añadirMarcador = (lat: number, lon: number) => {
  const marker = new Feature({
    geometry: new Point(transform([lon, lat], 'EPSG:4326',
      'EPSG:3857')),
  });


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

  map: Map;

  ngOnInit() {
    this.getLocation();
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


  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Latitud:', position.coords.latitude);
        console.log('Longitud:', position.coords.longitude);
        marcadorGeoloca(position.coords.latitude, position.coords.longitude);

      });
    } else {
      console.error('Geolocalización no soportada');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Estoy recibiendo una nueva ubicacion", changes["data"].currentValue[1], changes["data"].currentValue[0])
    añadirMarcador(changes["data"].currentValue[0], changes["data"].currentValue[1]);

  }
}


