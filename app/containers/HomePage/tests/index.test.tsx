import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <IntlProvider locale="en">
        <HomePage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should add cities on select input', () => {
    //
  });

  it('should filter active cities on a temperature filter move', () => {
    //
  });

  it('should remove an active city on a remove button push', () => {
    //
  });
});
