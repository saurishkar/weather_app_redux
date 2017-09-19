import { combineReducers } from 'redux';
import FetchWeather from './fetch_weather';

const rootReducer = combineReducers({
  weather: FetchWeather
});

export default rootReducer;
