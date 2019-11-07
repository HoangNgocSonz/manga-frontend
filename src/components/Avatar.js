
import React, { Component } from 'react';
import '../css/Avatar.css';
export default class Avatar extends Component {
	render() {
		return (
			<div id="wrapper">
				<div className="avatar mt-2" id="img-wrapper" >
					<img
						className="imgAvatar"
						src={this.props.img.avalink}
						alt={this.props.img.title}
					/>
					<center>
						<h6 className="titleUnderAvatar">{this.props.img.title}</h6>
						<p className="authorUnderAvatar" rel="author">
							{this.props.img.author}
						</p>
					</center>
				</div>
				<div className="moreInfo" id="text-wrapper">
					<p className="textNomal">
						{
							this.props.img.description
						}
					</p>
				</div>
			</div>
		);
	}
}