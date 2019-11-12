import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectRoute = (state: ApplicationRootState) => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRoute,
    routeState => routeState.location,
  );

const selectGlobal = (state: ApplicationRootState) => {
  return state.global;
};

export { makeSelectLocation, selectGlobal };
