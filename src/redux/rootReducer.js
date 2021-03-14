import { combineReducers } from 'redux';

import authReducer from './authReducer';
import fetchCurrencyReducer from './fetchCurrencyReducer';
import fetchWeatherReducer from './fetchWeatherReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  authReducer,
  loaderReducer,
  fetchWeatherReducer,
  fetchCurrencyReducer,
});

export default rootReducer;
