import React, { Component } from 'react';
import { City } from 'containers/App/types';
import { Container, Info, InfoRow, Title, Close } from './styled';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import { Icon } from 'antd';

interface Props {
  city: City;
  onClose: (name: string) => void;
}

/* FlipMove needs class implementation */
export class CityInfo extends Component<Props> {
  public render() {
    const { city, onClose } = this.props;
    return (
      <Container>
        <Close
          onClick={() => {
            onClose(city.name);
          }}
        >
          <Icon type="close-circle" />
        </Close>
        <Title data-testid="list-city-name">
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
  }
}
