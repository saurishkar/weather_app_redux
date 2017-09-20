import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartTemperature from './chart_temperature';
import ChartPressure from './chart_pressure';
import ChartHumidity from './chart_humidity';

class ForecastList extends React.Component {
	constructor(props) {
		super(props);

		this.renderForecast = this.renderForecast.bind(this);
	}

	renderForecast(data, index) {
			return (
					<tr key={data.city.id}>
						<td width="10%">{data.city.name}</td>
						<td>{ this.props.googleChart && <ChartTemperature value={index}/>}</td>
						<td>{ this.props.googleChart && <ChartPressure value={index}/>}</td>
						<td>{ this.props.googleChart && <ChartHumidity value={index}/>}</td>
					</tr>
				);
	}

	render() {
		return (
			<div className="forecast-table">
				<table className="table">
					<thead>
						<tr>
							<th width="5%">City</th>
							<th width="30%">Temperature</th>
							<th width="30%">Pressure</th>
							<th width="30%">Humidity</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderForecast)}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {weather: state.weather, googleChart: state.googleChart};
}

export default connect(mapStateToProps)(ForecastList);
