  
import React, { Component } from 'react';
import '../css/Avatar.css';
export default class Avatar extends Component {
	render() {
		return (
			<div id="wrapper">
				<div className="avatar border border-primary rounded mt-2"id="img-wrapper" >
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
					{/* What is Lorem Ipsum?
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
					scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into  */}
					</p>
				</div>

			</div>
			
		);
	}
}