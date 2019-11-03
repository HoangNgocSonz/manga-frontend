  
import React, { Component } from 'react';
import Avatar from './Avatar';
import '../css/MainContent.css';
import { Link } from 'react-router-dom';

export default class MainContent extends Component {
    render() {
        const allAvatars = this.props.img.map(img =>
            <div key={img._id} className="col-lg-2 col-md-3 col-sm-4 col-6" >
                <Link to={`/api/book/${img._id}`} >
                    <Avatar img={img} />
                </Link>
            </div>
        );
        return (
            <div>
                <div className="main_content container">
                    <div className="row">
                        {allAvatars}
                    </div>
                </div>
            </div>
           
        )
    }
}