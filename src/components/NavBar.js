import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
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
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="nameOfWeb">MangaX</div>
					<div className={`${classOne}`} id="navbarSupportedContent">
						<form className="form-inline my-2 my-lg-0">
							<input onChange={this.find} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
						</form>
					</div>
				</nav>

				<div className="thanh2">
					<span className="trangchu">Trang chủ</span>
					<span className="hoverWrapper" ><span className="theLoai"> Thể loại</span> 
						<div className="hoverShow2">

						</div>
						<div className="hoverShow1">
							<div className="container">
								<div className="row" >
									<div className="col-2">
										<Link to={{
												pathname: `/category/${"Shounen"}`,
												state: {  category: "Shounen" }
											}}>
												<div className="col-1">
												{"Shounen"}
											</div>
										</Link>
									</div>

									<div className="col-2">
										<Link to={{
											pathname: `/category/${"Action"}`,
											state: { category: "Action" }
										}}>
											<div className="col-1">
												{"Action"}
											</div>
										</Link>
									</div>

									<div className="col-2">
										<Link to={{
											pathname: `/category/${"Seinen"}`,
											state: { category: "Seinen" }
										}}>
											<div className="col-1">
												{"Seinen"}
											</div>
										</Link>
									</div>
								</div>
							</div>
						
						</div>
						<div className="hoverHide">

						</div>
					</span>
				</div>
			</div>
			

		);
	}
}
