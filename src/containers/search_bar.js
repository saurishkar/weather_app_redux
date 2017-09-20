import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getForecast from '../actions/index';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		// this.props.getForecast = this.props.getForecast.bind(this);
	}

	handleChange(event) {
		// console.log(this.state.term);
		this.setState({
			term: event.target.value
		});
	}

	componentDidMount() {
		// console.log("true");
		var input = document.getElementById('pac-input');
		var autocomplete = new google.maps.places.Autocomplete(input);
		google.charts.load('current', {packages: ['corechart', 'line']});
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.props.getForecast(this.state.term); //calling the action creator to send an ajax request
											//to fetch the weather details based on the city sent
											//as an input to the action creator
		this.setState({
			term: ''
		});
	}

	render() {
		
		return (
				<form onSubmit={this.handleFormSubmit} className="search-bar">
					<input id="pac-input" 
					className="search col-md-8" 
					type="text" 
					onChange={this.handleChange}
					value={this.state.term} />

					<button className="col-md-2 btn btn-secondary" type="submit">Search</button>
				</form>
			);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getForecast }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
