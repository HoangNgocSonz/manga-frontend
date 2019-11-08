import React, { Component } from 'react';
import axios from '../axios';
import '../css/DetailScreen.css';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

export default class DetailScreen extends Component {
	state = {
		category: String
	};

	componentDidMount() {
		axios
			.get(`/api/book/${this.props.match.params.imageId}`)
			.then((data) => {
				this.setState({
					image: data.data.data
				});
			})
			.catch((err) => console.log(err));
	}

	_onSearchChanged = text => this.setState({ searchString: text });

	render() {
		return (
			<div>
				<NavBar searchCategory={this._searchCategory} onSearchChanged={this._onSearchChanged} />
				<div className="main_content container" id="container">
					<div className="row" id="rowAvatar">
						<div className="col-lg-2 col-md-3 col-sm-4 col-4">
							{this.state.image ?
								<img src={this.state.image.avalink} className="detailAvatar"></img>
								: ''}
						</div>
						<div className="col-lg-10 col-md-9 col-sm-6 col-6" >
							<div id="col-10Avater">
								{
									this.state.image ?
										<div>
											<h3>{this.state.image.title}</h3>
											<p className="contentAvatar">Tác giả: {this.state.image.author}</p>
											<Link to={{
												pathname: `/category/${this.state.image.category}`,
												state: { category: this.state.image.category }
											}}>
												<button type="button" class="btn btn-outline-primary" id="contentAvatar">
													{this.state.image.category}
												</button>
											</Link>
											<p className="contentAvatar">{this.state.image.description}</p>
										</div>
										: ''
								}
							</div>
						</div>
					</div>
					<div>
						Chapter<br />
						{this.state.image
							? this.state.image.chapter.map(chapter => {
								return <Link to={`/api/chapter/${chapter._id}`} >
									<button className="btn btn-outline-primarybtn btn-outline-primary">
										{chapter.number}
									</button>
								</Link>
							})
							: ""}
					</div>
				</div>
			</div>
		);
	}
}