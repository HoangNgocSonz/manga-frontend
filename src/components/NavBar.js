/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import SearchField from './SearchField';

export default class NavBar extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link to={{
                        pathname: `/`,
                        }}>
                        <a className="navbar-brand" href="#">Home</a>
                    </Link>

					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Category
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link to={{
                                            pathname: `/category/${"Shounen"}`,
                                            state: { category: "Shounen" }
                                        }}>
                                            <a class="dropdown-item" href="#">Shounen</a>
                                    </Link>

									<Link to={{
                                            pathname: `/category/${"Seinen"}`,
                                            state: { category: "Seinen" }
                                        }}>
                                            <a class="dropdown-item" href="#">Seinen</a>
                                    </Link>
									
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="#">Something else here</a>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
							</li>
						</ul>
						<SearchField category={this.props.category} onSearchChanged={this.props.onSearchChanged} />
					</div>
				</div>
			</nav>
		);
	}
}
