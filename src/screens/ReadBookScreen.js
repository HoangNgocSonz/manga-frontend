import React, { Component } from 'react';
import axios from '../axios';
import { from } from 'rxjs';
import NavBar from '../components/navbarNot';
import '../css/read.css';
import NextButton from'../components/nextButton';

export default class ReadBookScreen extends Component {
    state = {};

    componentDidMount() {
        axios
            .get(`/api/chapter/${this.props.match.params.imageId}`)
            .then((data) => {
                this.setState({
                    image: data.data.data
                });
                console.log(this.props);
            })
            .catch((err) => console.log(err));
    }

    _onSearchChanged = text => this.setState({ searchString: text });

    render() {
        return (
            <div className="container">
                <center>
                    <NavBar searchCategory={this._searchCategory} onSearchChanged={this._onSearchChanged} />
                    {/* {this.state.image && this.state.image.number > 1 ? <button type="button" class="btn btn-primary my-2">Previous Chapter</button> : ""} */}
                    {this.state.image
                        ? this.state.image.link.map(link => {
                            return <div className="row">
                                <div className="mx-auto">
                                    <center>
                                        <img src={link} alt={this.state.image.book} className="img"></img>
                                    </center>
                                </div>
                            </div>
                        })
                        : ""}
                        <NextButton infoNext={[]}/>
                    {/* {this.state.image && this.state.image.number < 100 ? <button type="button" class="btn btn-primary my-2">Next Chapter</button> : ""} */}
                    
                </center>
            </div>
        )
    }
}
