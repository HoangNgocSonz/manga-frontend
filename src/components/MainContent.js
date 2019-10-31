import React, { Component } from 'react';
import Avatar from './Avatar';


export default class MainContent extends Component {
    render() {
        const allAvatars = this.props.img.map(img =>
            <Avatar key={img._id} img={img} />);
        return (
            <div className="main_content container">
                <div className="row">
                    {allAvatars}
                </div>
            </div>
        )
    }
}
