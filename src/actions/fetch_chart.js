const GET_CHART = 'GET_CHART';

export default function fetchChart(data, options, index, type = 'temp') {
	// const data = this.props.googleChart.visualization.DataTable();
	  	const chart = new google.visualization.LineChart(document.getElementById(`forecast-chart-${type}-${index}`));
	  	const request = chart.draw(data, options);
	// console.log(request);
	return {
		type: GET_CHART,
		payload: request
	};
}