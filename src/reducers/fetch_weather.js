const GET_WEATHER = 'GET_WEATHER';

export default function FetchWeather(state = [], action) {
	switch(action.type) {
		case GET_WEATHER : return [...state, action.payload.data];

		default: return state;
	};
}