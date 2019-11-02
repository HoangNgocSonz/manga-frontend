
import React, { Component } from 'react'
import axios from '../axios';

import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';

export default class HomeScreen extends Component {
    state = {
        images: [],
        searchString: "",
        displayedImages: [],
    };

    componentDidMount() {
        axios
            .get('/api/book')
            .then((data) => {
                this.setState({
                    images: data.data.data,
                })
                console.log(this.images);
            })
            .catch((err) => console.log(err));
    }

    _onSearchChanged = text => this.setState({ searchString: text });

    render() {
        const displayedImages = this.state.images.filter(
            img => img.title.includes(this.state.searchString)
                || img.author.includes(this.state.searchString)
        )

        return (
            <div>
                <NavBar searchCategory={this._searchCategory} onSearchChanged={this._onSearchChanged} />
                <MainContent img={displayedImages} />
            </div>
        )
    }
}