import React, { Component } from 'react';
import Avatar from '../components/Avatar';
import axios from '../axios';

import NavBar from '../components/NavBar';

export default class DetailScreen extends Component {
	state = {};

	componentDidMount() {
		axios
			.get('/api/book/:id')
			.then((data) => {
				console.log(data);
				this.setState({
					image: data.data.data
				});
			})
			.catch((err) => console.log(err));
	}
	render() {
		return ( 
			<div>
				<NavBar onSearchChanged={this._onSearchChanged} />
				{this.state.image ? <Avatar img={this.state.image} /> : ""}
			</div>
			);
		}
	}