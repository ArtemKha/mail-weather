import React from 'react';
import { City } from 'containers/App/types';
import { Container, Info, InfoRow, Title } from './styled';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

interface Props {
  city: City;
}
export const CityInfo: React.FC<Props> = ({ city }) => {
  return (
    <Container>
      <Title>{city.name}</Title>
      <Info>
        <InfoRow>
          <FormattedMessage {...messages.pm} />: {city.pm}
        </InfoRow>
        <InfoRow>
          <FormattedMessage {...messages.wind} />: {city.wind}
        </InfoRow>
        <InfoRow>
          <FormattedMessage {...messages.temp} />: {city.temp}
        </InfoRow>
      </Info>
    </Container>
  );
};
