import React, { Component } from 'react';
import axios from '../axios';
import { from } from 'rxjs';
import NavBar from '../components/NavBar';

export default class ReadBookScreen extends Component {
    state = {};

    componentDidMount() {
        axios
            .get(`/api/chapter/${this.props.match.params.imageId}`)
            .then((data) => {
                console.log(data);
                this.setState({
                    image: data.data.data
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <NavBar></NavBar>
                {this.state.image
                    ? this.state.image.link.map(link => {
                        return <div className="row">
                            <div className="mx-auto">
                                <img src={link} alt={this.state.image.book}></img>
                            </div>
                        </div>
                    })
                    : ""}
            </div>
        )
    }
}
