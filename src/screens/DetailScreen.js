import React, { Component } from 'react';
import axios from '../axios';
import '../css/DetailScreen.css';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

export default class DetailScreen extends Component {
	state = {};

	componentDidMount() {
		axios
			.get(`/api/book/${this.props.match.params.imageId}`)
			.then((data) => {
				//console.log(data);
				this.setState({
					image: data.data.data
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<NavBar category={this.state.image ? this.state.image.category : ""} />
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
												pathname: '/category',
												state: { category: this.state.image.category }
											}}>
												<button type="button" class="btn btn-outline-success" id="contentAvatar">
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
									<button className="btn btn-outline-successbtn btn-outline-success">
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