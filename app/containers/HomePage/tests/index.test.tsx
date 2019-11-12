import React from 'react';
import { mocked } from 'ts-jest/utils';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import HomePage from '../index';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import history from 'utils/history';
import { ConnectedRouter } from 'connected-react-router';
import { selectMockComponent } from 'utils/test-mocks';
import Search from 'containers/HomePage/Search';
const store = configureStore({}, history);

jest.mock('containers/App/actions');
jest.mock('containers/HomePage/Search');

const getComponent = () =>
  render(
    // tslint:disable-next-line: jsx-wrap-multiline
    <Provider store={store}>
      <IntlProvider locale="en">
        <ConnectedRouter history={history}>
          <HomePage />
        </ConnectedRouter>
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
    const value = 'Серпухов';

    mocked(Search).mockImplementation(selectMockComponent);

    // act
    const { getByTestId, getAllByTestId } = getComponent();
    const select = getByTestId('search');
    fireEvent.change(select, {
      target: { value },
    });
    const activeCities = getAllByTestId('list-city-name');

    // assert
    expect(
      activeCities.some(element => element.textContent!.includes(value)),
    ).toBe(true);
  });

  it('should filter active cities on a temperature filter move', () => {
    // coming soon (not really)
  });

  it('should remove an active city on a remove button push', () => {
    // coming soon (not really)
  });
});
