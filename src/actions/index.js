import GET_WEATHER from '../constants';
import WEATHER_API from '../constants';
import ROOT_URL from '../constants';

export default function getForecast(cityName) {
	// console.log("entered get forecast");
	const url = `${ROOT_URL}&q=${cityName}`;
	const data = $.ajax({
		url: url,
	});
	// console.log(data.data);
	return {
		type: GET_WEATHER,
		payload: data
	};
}