import { combineReducers } from 'redux';

import authReducer from './authReducer';
import fetchCurrencyReducer from './fetchCurrencyReducer';
import fetchWeatherReducer from './fetchWeatherReducer';
import loaderReducer from './loaderReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  authReducer,
  loaderReducer,
  registrationReducer,
  fetchWeatherReducer,
  fetchCurrencyReducer,
});

export default rootReducer;
