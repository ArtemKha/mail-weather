import React, { useState, useEffect } from 'react';
import {
  useSelector as useReduxSelector,
  useDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import { Slider } from 'antd';
import { FormattedMessage } from 'react-intl';
import { ApplicationRootState } from 'types';
import { City } from 'containers/App/types';
import { setTemperature } from 'containers/App/actions';
import {
  Container,
  Section,
  Label,
  RangeInput,
  Filter,
  SearchSection,
} from './styled';
import { CityInfo } from './CityInfo';
import messages from './messages';
import Search from './Search';

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

  const dispatch = useDispatch();

  useEffect(() => {
    setOptionCities(cities.filter(city => city.temp >= temperature));
  }, [temperature]);

  function onSelect(name) {
    const city = optionCities.find(city => city.name === name)!;
    const newCities = new Set(activeCities).add(city);
    setActiveCities(Array.from(newCities));
  }
  function onClose(name) {
    const newCities = activeCities.filter(city => city.name !== name)!;
    setActiveCities(newCities);
  }
  function onFilter(value) {
    dispatch(setTemperature(value));
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
          .map(city => (
            <CityInfo key={city.name} city={city} onClose={onClose} />
          ))}
      </Section>
    </Container>
  );
};

export default HomePage;
