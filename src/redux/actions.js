import {
  WEATHER_PROPS,
  LOADER_OFF,
  LOADER_ON,
  LOGIN,
  QUIT,
  REQUEST,
  WEATHER_DATA,
} from './constants';

const authAction = () => ({
  type: LOGIN,
});

const quitAction = () => ({
  type: QUIT,
});

const weatherRequestAction = () => ({
  type: REQUEST,
});

const dispatchPropsToSaga = (weatherProps) => ({
  type: WEATHER_PROPS,
  payload: weatherProps,
});

const fetchWeatherResponse = (weatherData) => ({
  type: WEATHER_DATA,
  payload: weatherData,
});

const showLoaderAction = () => ({
  type: LOADER_ON,
});

const hideLoaderAction = () => ({
  type: LOADER_OFF,
});

export {
  authAction,
  quitAction,
  weatherRequestAction,
  showLoaderAction,
  fetchWeatherResponse,
  dispatchPropsToSaga,
  hideLoaderAction,
};
