import React, { Component } from 'react';

export default class ForecastList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="forecast-table">
				<table>
					<thead>
						<tr>
							<th width="20%">City</th>
							<th>Temperature</th>
							<th>Pressure</th>
							<th>Humidity</th>
						</tr>
					</thead>
				</table>
			</div>
		);
	}
} 