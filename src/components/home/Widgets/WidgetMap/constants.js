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

export { BORDER_COLOR, BORDER_WIDTH, CAPTIAL_COLOR, CAPITAL_RADIUS, GEO_DATA, labels };
