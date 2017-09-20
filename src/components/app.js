import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ForecastList from '../containers/forecast_list';

export default class App extends Component {
  render() {
    return (
      <div>
      		<h3>The Weather App !</h3>
      		<br />
      		<SearchBar />
      		<br />
      		<ForecastList />
      </div>
    );
  }
}
