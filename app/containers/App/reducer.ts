import { ContainerState, ContainerActions, City } from './types';
import ActionTypes from './constants';
import { cities } from 'mocks/cities';

// The initial state of the App
export const initialGlobalState: ContainerState = {
  loading: false,
  error: false,
  cities,
  temperature: 0,
};

/* we don't need to use redux at all, but it is a requirement */

function appReducer(
  state: ContainerState = initialGlobalState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_CITIES:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.LOAD_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: state.error,
        cities: action.payload,
      };
    case ActionTypes.LOAD_CITIES_ERROR:
      const { error, loading, ...rest } = state;
      return {
        error: action.payload,
        loading: false,
        ...rest,
      };
    case ActionTypes.SET_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
