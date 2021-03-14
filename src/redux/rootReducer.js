import { combineReducers } from 'redux';

import authReducer from './authReducer';
import fetchWeatherReducer from './fetchWeatherReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  authReducer,
  loaderReducer,
  fetchWeatherReducer,
});

export default rootReducer;
