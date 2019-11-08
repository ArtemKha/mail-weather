/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.HomePage';

export default defineMessages({
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Search',
  },
  pm: {
    id: `${scope}.pm`,
    defaultMessage: 'PM 10',
  },
  wind: {
    id: `${scope}.wind`,
    defaultMessage: 'Ветер',
  },
  temperature: {
    id: `${scope}.temperature`,
    defaultMessage: 'Температура',
  },
  warmer: {
    id: `${scope}.warmer`,
    defaultMessage: 'Теплее чем',
  },
});
