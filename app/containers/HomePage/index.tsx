import React, { useState } from 'react';
import { Select, Slider } from 'antd';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Search from './Search';
import { Container, SliderSection } from './styled';
import { CityInfo } from './CityInfo';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { ApplicationRootState } from 'types';
import { City } from 'containers/App/types';

const useSelector: TypedUseSelectorHook<
  ApplicationRootState
> = useReduxSelector;

const HomePage: React.FC = () => {
  const cities: City[] = useSelector(state => state.global.cities);
  const [activeCities, setActiveCities] = useState(cities.slice(0, 3));

  return (
    <Container>
      <Search options={cities} />
      <SliderSection>
        <FormattedMessage {...messages.warmer} />
        <Slider defaultValue={30} />
      </SliderSection>
      {activeCities.map((city, i) => (
        <CityInfo key={i} city={city} />
      ))}
    </Container>
  );
};

export default HomePage;
