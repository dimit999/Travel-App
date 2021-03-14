import { takeEvery, put, call, take } from 'redux-saga/effects';

import 'regenerator-runtime/runtime';

import OWM_API from '../components/home/Widgets/WidgetWeather/constants';

import { fetchWeatherResponse, showLoaderAction, hideLoaderAction } from './actions';
import { WEATHER_PROPS, REQUEST } from './constants';

function* sagaWatcher() {
  yield takeEvery(REQUEST, weatherRequestWorker);
}

function* weatherRequestWorker() {
  yield put(showLoaderAction());
  const action = yield take(WEATHER_PROPS);
  const payload = yield call(fetchWeather, action.payload);
  yield put(fetchWeatherResponse(payload));
  yield put(hideLoaderAction());
}

function getNoWeather() {
  return {
    temperature: '-',
    icon: '-',
    description: '-',
    feelsLike: '-',
    wind: '-',
    humidity: '-',
  };
}

async function fetchWeather(props) {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      props.city
    )}&exclude=hourly,minutely&units=metric&appid=${OWM_API}&lang=${props.lang.substring(0, 2)}`
  )
    .then((weatherData) => {
      return weatherData.json();
    })
    .then((data) => {
      const owfIcon = `owf-${data.weather[0].id}-${data.weather[0].icon.substr(-1, 1)}`;
      return {
        temperature: Math.round(data.main.temp),
        icon: owfIcon,
        description: data.weather[0].description,
        feelsLike: Math.round(data.main.feels_like),
        wind: data.wind.speed,
        humidity: data.main.humidity,
      };
    })
    .catch(() => {
      return getNoWeather();
    });
  return weatherData;
}

export default sagaWatcher;
