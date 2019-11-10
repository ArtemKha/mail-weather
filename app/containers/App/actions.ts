import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loadCities = () => action(ActionTypes.LOAD_CITIES);
export const citiesLoaded = cities =>
  action(ActionTypes.LOAD_CITIES_SUCCESS, cities);
export const citiesLoadingError = (error: object) =>
  action(ActionTypes.LOAD_CITIES_ERROR, error);

export const setTemperature = temperature =>
  action(ActionTypes.SET_TEMPERATURE, temperature);
