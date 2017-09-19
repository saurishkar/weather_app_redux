import GET_WEATHER from '../constants';

export default function FetchWeather(state = [], action) {
	switch(action.type) {
		case GET_WEATHER : return [...state, action.payload];

		default: return state;
	};
}