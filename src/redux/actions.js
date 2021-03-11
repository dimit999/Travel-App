import {
  DATE_DEFAULT,
  DATE_PICKER,
  DEFAULT_REQUEST,
  FAVORITE,
  LOADER_OFF,
  LOADER_ON,
  LOGIN,
  QUIT,
  REQUEST,
  RESPONSE,
} from './constants';

const authAction = () => ({
  type: LOGIN,
});

const quitAction = () => ({
  type: QUIT,
});

const defaultFlightRequestAction = () => ({
  type: DEFAULT_REQUEST,
});

const dateDefaultAction = (date) => ({
  type: DATE_DEFAULT,
  payload: date,
});

const fetchFlightAction = () => ({
  type: REQUEST,
});

const datePickerAction = (date) => ({
  type: DATE_PICKER,
  payload: date,
});

const fetchFlightResponse = (response) => ({
  type: RESPONSE,
  payload: response,
});

const showLoaderAction = () => ({
  type: LOADER_ON,
});

const hideLoaderAction = () => ({
  type: LOADER_OFF,
});

const isFavorite = (favorites) => ({
  type: FAVORITE,
  payload: favorites,
});

export {
  authAction,
  quitAction,
  fetchFlightAction,
  showLoaderAction,
  fetchFlightResponse,
  defaultFlightRequestAction,
  dateDefaultAction,
  datePickerAction,
  hideLoaderAction,
  isFavorite,
};
