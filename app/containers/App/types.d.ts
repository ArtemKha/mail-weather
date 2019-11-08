import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */

interface AppState {
  readonly loading: boolean;
  readonly error?: object | boolean;
  readonly cities: City[];
  readonly temperature: number;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

interface City {
  name: string;
  pm: number;
  wind: number;
  temp: number;
}

/* ResponseCity */

interface Coord {
  Lon: number;
  Lat: number;
}

interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg?: number | undefined;
}

interface Clouds {
  today: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface ResponseCity {
  id: number;
  dt: number;
  name: string;
  coord: Coord;
  main: Main;
  visibility?: number | undefined;
  wind: Wind;
  rain?: any;
  snow?: any;
  clouds: Clouds;
  weather: Weather[];
}

export {
  RootState,
  ContainerState,
  ContainerActions,
  UserData,
  City,
  ResponseCity,
};
