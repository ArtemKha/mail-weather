import React, { useState, useEffect } from 'react';
import { Select, Slider } from 'antd';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Search from './Search';
import {
  Container,
  Section,
  Label,
  RangeInput,
  Filter,
  SearchSection,
} from './styled';
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
  const [cities, temperature]: [City[], number] = useSelector(state => [
    state.global.cities,
    state.global.temperature,
  ]);
  const [activeCities, setActiveCities] = useState(cities.slice(0, 3));
  const [optionCities, setOptionCities] = useState(cities.slice(0, 3));

  useEffect(() => {
    setOptionCities(cities.filter(city => city.temp >= temperature));
  }, [temperature]);

  function onSelect() {
    //
  }
  function onClose() {
    //
  }
  function onFilter() {
    //
  }
  return (
    <Container>
      <SearchSection>
        <Search options={optionCities} onSelect={onSelect} />
      </SearchSection>
      <Filter>
        <Label>
          <FormattedMessage {...messages.warmer} />
        </Label>
        <RangeInput>
          <Slider onChange={onFilter} min={-50} defaultValue={1} max={50} />
        </RangeInput>
      </Filter>
      <Section>
        {activeCities
          .filter(city => city.temp >= temperature)
          .map((city, i) => (
            <CityInfo key={i} city={city} onClose={onClose} />
          ))}
      </Section>
    </Container>
  );
};

export default HomePage;
