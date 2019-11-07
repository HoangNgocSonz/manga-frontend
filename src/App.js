
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from './axios';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import CategoryScreen from './screens/CategoryScreen';
import ReadBookScreen from './screens/ReadBookScreen';
import ScrollToTop from './components/ScrollToTop';

export default class App extends Component {
	state = {};

	_onLogin = () => {
		axios
			.post('/api/auth', {
				username: 'admin',
				password: '123456'
			})
			.then((response) =>
				this.setState({
					username: response.data.username,
					id: response.data.id
				})
			)
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<ScrollToTop />
					<Route exact path="/" render={(props) => {
						return <HomeScreen {...props} username={this.state.username} onLogin={this._onLogin} />
					}} />
					<Route exact path="/api/book/:imageId" render={(props) => {
						return <DetailScreen {...props} username={this.state.username} onLogin={this._onLogin} />
					}} />
					<Route exact path="/api/chapter/:imageId" render={(props) => {
						return <ReadBookScreen {...props} username={this.state.username} onLogin={this._onLogin} />
					}} />
					<Route exact path="/category/:category" render={(props) => {
						return <CategoryScreen {...props} username={this.state.username} onLogin={this._onLogin} />
					}} />
				</div>
			</BrowserRouter>
		);
	}
}