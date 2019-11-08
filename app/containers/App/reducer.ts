import { ContainerState, ContainerActions, City } from './types';
import ActionTypes from './constants';

const init: City[] = [];

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
  cities: [...init],
  temperature: 0,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
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
