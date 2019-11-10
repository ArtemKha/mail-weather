import React, { useState, useEffect } from 'react';
import {
  useSelector as useReduxSelector,
  useDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import FlipMove from 'react-flip-move';
import { Slider } from 'antd';
import { FormattedMessage } from 'react-intl';
import { ApplicationRootState } from 'types';
import { City } from 'containers/App/types';
import saga from 'containers/App/saga';
import reducer from 'containers/App/reducer';
import { setTemperature, loadCities } from 'containers/App/actions';
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
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

const key = 'global';

const useSelector: TypedUseSelectorHook<
  ApplicationRootState
> = useReduxSelector;

const HomePage: React.FC = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [cities, temperature]: [City[], number] = useSelector(({ global }) => [
    global.cities,
    global.temperature,
  ]);
  const [activeCities, setActiveCities] = useState(cities.slice(5, 8));
  const [optionCities, setOptionCities] = useState(cities);

  const dispatch = useDispatch();

  const interval = 60; // weather updates every minute

  useEffect(() => {
    dispatch(loadCities());

    const updateRate = setInterval(() => {
      dispatch(loadCities());
    }, 1000 * interval);

    return () => clearInterval(updateRate);
  });

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
          <Slider onChange={onFilter} min={-20} defaultValue={0} max={20} />
        </RangeInput>
      </Filter>
      <Section>
        <FlipMove>
          {activeCities
            .filter(city => city.temp >= temperature)
            .map(city => (
              <CityInfo key={city.name} city={city} onClose={onClose} />
            ))}
        </FlipMove>
      </Section>
    </Container>
  );
};

export default HomePage;
