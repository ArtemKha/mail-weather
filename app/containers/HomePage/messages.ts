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
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: 'Измените город или температуру в запросе',
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
  ms: {
    id: `${scope}.ms`,
    defaultMessage: 'м/с',
  },
  warmer: {
    id: `${scope}.warmer`,
    defaultMessage: 'Теплее чем',
  },
});
