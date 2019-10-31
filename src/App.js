import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

export default class App extends Component {
	state = {}
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route exact path="/" component={HomeScreen} />
					<Route path="/book/:id" component={DetailScreen} />
				</div>
			</BrowserRouter>
		);
	}
}
