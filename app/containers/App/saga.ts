import { put, takeLatest, call } from 'redux-saga/effects';
import { citiesLoadingError, citiesLoaded } from 'containers/App/actions';
import ActionTypes from 'containers/App/constants';

import request from 'utils/request';
import { mapResponse } from 'utils/helpers';
import { response } from 'mocks/response';
import { City } from 'containers/App/types';

export function* getCities() {
  const key = 'your-appid';
  const requestURL = `https://api.openweathermap.org/data/2.5/box/city?bbox=34,54,40,56,10&lang=ru&appid=${key}`;

  try {
    // Call our request helper (see 'utils/request')
    // const response = yield call(request, requestURL);
    if (response.cod === 200) {
      const cities: City[] = mapResponse(response.list);

      yield put(citiesLoaded(cities));
    } else {
      yield put(citiesLoadingError(response.error));
    }
  } catch (err) {
    yield put(citiesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* ratesData() {
  yield takeLatest(ActionTypes.LOAD_CITIES, getCities);
}
