import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import { useDispatch } from 'react-redux';
import { loadCities } from './actions';

const key = 'global';

export default function App() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const interval = 60; // weather updates every minute

  useEffect(() => {
    dispatch(loadCities());

    const updateRate = setInterval(() => {
      dispatch(loadCities());
    }, 1000 * interval);

    return () => clearInterval(updateRate);
  });

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
  );
}
