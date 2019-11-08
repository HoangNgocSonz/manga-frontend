/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react';
import Avatar from './Avatar';
import '../css/MainContent.css';
import { Link } from 'react-router-dom';


const nanatsu = "https://static.fptplay.net/static/img/share/video/25_09_2019/nanatsu-no-taizai-kamigami-no-gekirin-225-09-2019_16g25-14.jpg";
const kimetsu = "https://gamehot24h.com/wp-content/uploads/2019/10/Kimetsu-no-Yaiba-chap-181_1572323569.jpg";
const onepiece = "https://genknews.genkcdn.vn/2018/12/11/anh-1-15445215232132139250648.jpg";
const myHero = "https://genknews.genkcdn.vn/2019/7/6/photo-1-15623861862351323965710.jpg";
const onePunch = "http://image.phimmoi.net/post/2019/05/16/one-punch-man-season-two-netflix.jpg";
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
                <div className="container bg-dark px-3" id="hot">
                    <div className="row">
                        <div className="col-3">
                            <img className="hot1" src={nanatsu}></img>
                            <img className="hot1" src={kimetsu}></img>
                        </div>
                        <div className="col-6">
                            <img className="hot2" src={onepiece}></img>
                        </div>
                        <div className="col-3">
                            <img className="hot1" src={myHero}></img>
                            <img className="hot1" src={onePunch}></img>
                        </div>
                    </div>
                </div>
                <div className="main_content container">
                    <div className="row">
                        {allAvatars}
                    </div>
                </div>
            </div>
        )
    }
}