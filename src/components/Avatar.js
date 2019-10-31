import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Avatar extends Component {
	render() {
		return (
			<Card className="col-sm-4 border-primary my-3 mr-auto ml-auto" style={{ width: '18rem' }}>
				<span className="border mt-2">
					<Card.Img
						className="img-fluid"
						variant="top"
						src={this.props.img.avalink}
						alt={this.props.img.title}
					/>
				</span>
				{/* <img className="image-fluid"
                    width="140" height="210"
                    src={this.props.img.avalink}
                    alt={this.props.img.title}
                /> */}
				<Card.Body>
					<h4>{this.props.img.title}</h4>
					<p className="font-italic font-weight-light" rel="author">
						{this.props.img.author}
					</p>
					<Button variant="primary">See more</Button>
				</Card.Body>
			</Card>
		);
	}
}
