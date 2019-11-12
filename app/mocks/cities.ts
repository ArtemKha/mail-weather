import { response } from './response';
import { mapResponse } from 'utils/helpers';

export const cities = mapResponse(response.list);
