import GET_WEATHER from '../actions/index';

export default function FetchWeather(state = null, action) {
	switch(action.type) {
		case GET_WEATHER : return action.payload;

		default: return state;
	};
}