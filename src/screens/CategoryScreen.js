import React, { Component } from 'react';
import Avatar from '../components/Avatar';
import '../css/MainContent.css';
import axios from '../axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default class CategoryScreen extends Component {
    state = {
        image: [],
    };
    componentDidMount() {
        axios
            .get(`/api/book?category=${this.props.match.params.category}`)
            .then((data) => {
                this.setState({
                    image: data.data.data
                });
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
                <NavBar />
                <div className="main_content container">
                    <div className="row">
                        <h1>{this.state.image ? this.state.image.category : ""}</h1><br />
                        {allAvatars}
                    </div>
                </div>
            </div>
        )
    }
}