import styles from './widgetMap.scss';
import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View, Overlay } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

const BORDER_COLOR = '#FF3333';
const BORDER_WIDTH = 2;
const CAPTIAL_COLOR = '#2E86C1';
const CAPITAL_RADIUS = 5;

const GEO_DATA = {
  ZAF: {
    capital: [28.21, -25.73],
    center: [24.52, -28.73],
    zoom: 4.3,
  },
  USA: {
    capital: [-77.02, 38.92],
    center: [-96, 37],
    zoom: 3,
  },
  CHN: {
    capital: [116.38, 39.92],
    center: [104, 37],
    zoom: 2.8,
  },
  AUS: {
    capital: [149.12, -35.31],
    center: [133, -27],
    zoom: 3,
  },
  BRA: {
    capital: [-47.88, -15.78],
    center: [-53.58, -15],
    zoom: 2.8,
  },
  FRA: {
    capital: [2.35, 48.86],
    center: [2.68, 46.5],
    zoom: 4.4,
  },
  GBR: {
    capital: [0, 51.51],
    center: [-3.85, 54.48],
    zoom: 4,
  },
  IND: {
    capital: [77.2, 28.61],
    center: [77.99, 22.11],
    zoom: 3.4,
  },
};

const labels = {
  'en-US': {
    ZAF: { name: 'South Africa', capital: 'Pretoria' },
    USA: { name: 'United States', capital: 'Washington' },
    CHN: { name: 'China', capital: 'Beijing' },
    AUS: { name: 'Australia', capital: 'Canberra' },
    BRA: { name: 'Brazil', capital: 'Brasilia' },
    FRA: { name: 'France', capital: 'Paris' },
    GBR: { name: 'United Kingdom', capital: 'London' },
    IND: { name: 'India', capital: 'New Delhi' },
  },
  'fr-FR': {
    ZAF: { name: 'Afrique du Sud', capital: 'Pretoria' },
    USA: { name: 'États-Unis', capital: 'Washington' },
    CHN: { name: 'Chine', capital: 'Pékin' },
    AUS: { name: 'Australie', capital: 'Canberra' },
    BRA: { name: 'Brésil', capital: 'Brasilia' },
    FRA: { name: 'France', capital: 'Paris' },
    GBR: { name: 'Royaume-Uni', capital: 'Londres' },
    IND: { name: 'Inde', capital: 'New Delhi' },
  },
  'ru-RU': {
    ZAF: { name: 'ЮАР', capital: 'Претория' },
    USA: { name: 'США', capital: 'Вашингтон' },
    CHN: { name: 'Китай', capital: 'Пекин' },
    AUS: { name: 'Австралия', capital: 'Канберра' },
    BRA: { name: 'Бразилия', capital: 'Бразилиа' },
    FRA: { name: 'Франция', capital: 'Париж' },
    GBR: { name: 'Великобритания', capital: 'Лондон' },
    IND: { name: 'Индия', capital: 'Нью-Дели' },
  },
};

function WidgetMap(props) {
  useEffect(() => {
    let map = new Map({
      target: document.getElementById('map-container'),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: `../../assets/geodata/${props.country}.json`,
          }),
          style: new Style({
            stroke: new Stroke({
              color: BORDER_COLOR,
              width: BORDER_WIDTH,
            }),
          }),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat(GEO_DATA[props.country].capital)),
              }),
            ],
          }),
          style: new Style({
            image: new Circle({
              radius: CAPITAL_RADIUS,
              fill: new Fill({ color: CAPTIAL_COLOR }),
            }),
          }),
        }),
      ],
      overlays: [
        new Overlay({
          element: document.getElementById('popup'),
          position: fromLonLat(GEO_DATA[props.country].capital),
          positioning: 'bottom-center',
        }),
      ],
      view: new View({
        center: fromLonLat(GEO_DATA[props.country].center),
        zoom: GEO_DATA[props.country].zoom,
      }),
    });
  }, []);

  return (
    <div className={styles['widget-map']}>
      <p className={styles['header']}>{labels[props.lang][props.country].name}</p>
      <div className={styles['map-container']} id="map-container">
        <div className={styles['popup']} id="popup">
          {labels[props.lang][props.country].capital}
        </div>
      </div>
    </div>
  );
}

export default WidgetMap;
