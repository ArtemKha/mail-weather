import React from 'react';
import { City } from 'containers/App/types';
import { Container, Info, InfoRow, Title, Close } from './styled';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import { Icon } from 'antd';

interface Props {
  city: City;
  onClose: () => void;
}
export const CityInfo: React.FC<Props> = ({ city, onClose }) => {
  return (
    <Container>
      <Close onClick={onClose}>
        <Icon type="close-circle" />
      </Close>
      <Title>
        {city.name}, {city.temp}&#8451;
      </Title>
      <Info>
        <InfoRow>
          <FormattedMessage {...messages.pm} />: {city.pm}
        </InfoRow>
        <InfoRow>
          <FormattedMessage {...messages.wind} />: {city.wind}{' '}
          <FormattedMessage {...messages.ms} />
        </InfoRow>
      </Info>
    </Container>
  );
};
