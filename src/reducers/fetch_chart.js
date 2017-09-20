const GET_CHART = 'GET_CHART';

export default function FetchChart(state = [], action) {
	switch(action.type) {
		case GET_CHART: 
		if(action.payload) return [...state, action.payload.data];
		else return state;

		default: return state;
	};
}