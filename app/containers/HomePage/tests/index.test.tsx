import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import HomePage from '../index';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import history from 'utils/history';

const store = configureStore({}, history);

jest.mock('containers/App/actions');

const getComponent = () =>
  render(
    // tslint:disable-next-line: jsx-wrap-multiline
    <Provider store={store}>
      <IntlProvider locale="en">
        <HomePage />
      </IntlProvider>
    </Provider>,
  );

describe('<HomePage />', () => {
  afterEach(cleanup);

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = getComponent();
    expect(firstChild).toMatchSnapshot();
  });

  it('should add cities on select input', () => {
    // arrange
    const value = 'Москва';

    // act
    const { getByPlaceholderText, getAllByTestId } = getComponent();
    fireEvent.change(getByPlaceholderText(/выберете город/i), {
      target: { value },
    });
    const activeCities = getAllByTestId('list-city-name');

    // assert
    expect(activeCities.map(element => element.textContent).includes(value));
  });

  it('should filter active cities on a temperature filter move', () => {
    //
  });

  it('should remove an active city on a remove button push', () => {
    //
  });
});
