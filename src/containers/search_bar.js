import React, { Component } from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		// console.log(this.state.term);
		this.setState({
			term: event.target.value
		});
	}

	componentDidMount() {
		var input = document.getElementById('pac-input');
		var autocomplete = new google.maps.places.Autocomplete(input);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const url = `api.openweathermap.org/data/2.5/forecast?q=${this.state.term}&mode=xml`;
		$.ajax({
			async: false,
			url: url,
		})
		.done((msg) => {
			console.log(msg);
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

export default SearchBar;