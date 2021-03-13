import { takeEvery, put, call, take } from 'redux-saga/effects';

import 'regenerator-runtime/runtime';

import { fetchFlightResponse, showLoaderAction, hideLoaderAction } from './actions';
import { DATE_DEFAULT, DATE_PICKER, DEFAULT_REQUEST, REQUEST } from './constants';

function* sagaWatcher() {
  yield takeEvery(DEFAULT_REQUEST, defaultRequestWorker);
  yield takeEvery(REQUEST, flightRequestWorker);
}

function* defaultRequestWorker() {
  const action = yield take(DATE_DEFAULT);
  const payload = yield call(fetchFlight, action.payload);
  yield put(fetchFlightResponse(payload));
  yield put(hideLoaderAction());
}

function* flightRequestWorker() {
  yield put(showLoaderAction());
  const action = yield take(DATE_PICKER);
  const payload = yield call(fetchFlightPicker, action.payload);
  yield put(fetchFlightResponse(payload));
  yield put(hideLoaderAction());
}

async function fetchFlight() {
  const response = await fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/2021-03?inboundpartialdate=2021-03',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6e03ab9a43msh8992a5c19c25fecp1e8913jsn89eb12efedd6',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    },
  );
  const data = await response.json();
  return data;
}

async function fetchFlightPicker(date) {
  const response = await fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/${date}?inboundpartialdate=2021-03`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6e03ab9a43msh8992a5c19c25fecp1e8913jsn89eb12efedd6',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    },
  );
  const data = await response.json();
  return data;
}

export default sagaWatcher;
