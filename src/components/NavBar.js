
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchField from './SearchField';
import logo from '../img/logo.png';
import ProfilePanel from './ProfilePanel';

export default class NavBar extends Component {
	state = {
		collapsed: true,
	};

	find = event => this.props.onSearchChanged(event.target.value);

	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render() {
		const collapsed = this.state.collapsed;
		const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
		const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Navbar</a>
				<button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className={`${classOne}`} id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Dropdown
						</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">Action</a>
								<a className="dropdown-item" href="#">Another action</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#">Something else here</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input onChange={this.find} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>
		);
	}
}