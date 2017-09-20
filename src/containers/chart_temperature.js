import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchChart from '../actions/fetch_chart';

class ChartTemperature extends React.Component {
	constructor(props) {
		super(props);
		this.epochToDay = this.epochToDay.bind(this);
		// this.renderChart = this.renderChart.bind(this);
	}
	renderChart() {
		if(this.props.weather[this.props.value]) {

			console.log(this.props.weather[this.props.value]);
			const chartData = new google.visualization.DataTable();
		  	chartData.addColumn('string', 'Date');
		  	chartData.addColumn('number', 'Max_Temp');
		  	const rows = 
		  		this.props.weather[this.props.value].list.map((elem) => {
		  			return [this.epochToDay(elem.dt), elem.main.temp-273];
		  		});
			chartData.addRows(rows);

		  	var options = {
		    	hAxis: {
		      	title: `${this.getCurrentMonth()}, ${new Date().getFullYear().toString()}`
		    	},
		    	vAxis: {
		      	title: 'Temperature(C)'
		    	},
		    	curveType: 'function'
		  	};
		  	this.props.fetchChart(chartData, options, this.props.value);
		}
		// console.log("weather", this.props.weather[this.props.value]);
		
	}

	epochToDay(epochValue) {
		const newDate = new Date(0);
		newDate.setUTCSeconds(epochValue);
		return newDate.toString();
	}

	getCurrentMonth() {
		const month= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return month[new Date().getMonth()];
	}

	componentDidMount() {
		this.renderChart();
	}

	render() {
		const id = `forecast-chart-temp-${this.props.value}`;
		return (
			<div id={id}>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {weather: state.weather, googleChart: state.googleChart};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchChart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartTemperature);
