import cyrillicToTranslit from 'cyrillic-to-translit-js';
import { City, ResponseCity } from 'containers/App/types';

export function mapResponse(list: ResponseCity[]): City[] {
  return list.map(city => ({
    name: new cyrillicToTranslit().reverse(city.name),
    pm: Math.floor(Math.random() * 200),
    wind: city.wind.speed,
    temp: Math.round(city.main.temp),
  }));
}
