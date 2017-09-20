import { combineReducers } from 'redux';
import FetchWeather from './fetch_weather';
import FetchChart from './fetch_chart';

const rootReducer = combineReducers({
  weather: FetchWeather,
  googleChart: FetchChart
});

export default rootReducer;
