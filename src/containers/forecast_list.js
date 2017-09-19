import React, { Component } from 'react';
import { connect } from 'react-redux';

class ForecastList extends React.Component {
	constructor(props) {
		super(props);
	}

	renderForecast(data) {
		// console.log(data);
		
			return (
					<tr>
						<td></td>
					</tr>
				);
	}

	render() {
		return (
			<div className="forecast-table">
				<table className="table">
					<thead>
						<tr>
							<th width="20%">City</th>
							<th>Temperature</th>
							<th>Pressure</th>
							<th>Humidity</th>
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
	return {weather: state.weather};
}

export default connect(mapStateToProps)(ForecastList);