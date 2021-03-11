import { combineReducers } from 'redux';

import authReducer from './authReducer';
import defaultDateReducer from './defaultDateReducer';
import favoriteFlightListReducer from './favoriteFlightListReducer';
import fetchFlightReducer from './fetchFlightReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  authReducer,
  loaderReducer,
  fetchFlightReducer,
  favoriteFlightListReducer,
  defaultDateReducer,
});

export default rootReducer;
