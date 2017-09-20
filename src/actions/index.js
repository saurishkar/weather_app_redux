import axios from 'axios';

const GET_WEATHER = 'GET_WEATHER';
const WEATHER_API = '7a361ea910c9bdc5d15b0a0685b9dcd7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${WEATHER_API}`;

export default function getForecast(cityName) {
	const url = `${ROOT_URL}&q=${cityName}`;
	const request = axios.get(url);
	return {
		type: GET_WEATHER,
		payload: request
	};
}
