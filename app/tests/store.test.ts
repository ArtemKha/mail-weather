/**
 * Test store addons
 */
import history from '../utils/history';
import configureStore from '../configureStore';
import { LifeStore } from '../types';
import { composeWithDevTools } from 'redux-devtools-extension';

describe('configureStore', () => {
  let store: LifeStore;

  beforeAll(() => {
    store = configureStore({}, history);
  });

  describe('injectedReducers', () => {
    it('should contain an object for reducers', () => {
      expect(typeof store.injectedReducers).toBe('object');
    });
  });

  describe('injectedSagas', () => {
    it('should contain an object for sagas', () => {
      expect(typeof store.injectedSagas).toBe('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function');
    });
  });
});


jest.mock('redux-devtools-extension', () => ({
  composeWithDevTools: jest.fn(),
}));

describe('configureStore params', () => {
  it('should call composeWithDevTools', () => {
    configureStore(undefined, history);
    expect(composeWithDevTools).toHaveBeenCalled();
  });
});
