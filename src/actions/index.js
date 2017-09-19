const WEATHER_API = '7a361ea910c9bdc5d15b0a0685b9dcd7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?mode=xml&appid=${WEATHER_API}`;

export const GET_WEATHER = 'GET_WEATHER';

export function getForecast(cityName) {
	let data = null;
	console.log("entered get forecast");
	const url = `${ROOT_URL}&q=${cityName}`;
	$.ajax({
		url: url,
	})
	.done((msg) => {
		data = msg;
	})
	.fail(() => {
		console.log("error");
	});
	return {
		type: GET_WEATHER,
		payload: data
	};
}