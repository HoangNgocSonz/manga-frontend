import React, { Component } from 'react';

export default class SearchField extends Component {
	_handleTextChange = event => this.props.onSearchChanged(event.target.value);
	render() {
		return (
			<form className="form-inline my-2 my-lg-0">
				<input onChange={this._handleTextChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			</form>
		);
	}
}