import React, { Component } from 'react';
import Avatar from '../components/Avatar';
import '../css/MainContent.css';
import axios from '../axios';
import { Link } from 'react-router-dom';

export default class CategoryScreen extends Component {
    state = {
        image: [],
    };
    componentDidMount() {
        console.log('props', this.props)
        axios
            .get(`/api/book?category=${this.props.match.params.name}`)
            .then((data) => {
                this.setState({
                    image: data.data.data
                });
                console.log(this.state.image);
            })
            .catch((err) => console.log(err));
    }

    render() {
        const allAvatars = this.state.image.map(img =>
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