// import React from 'react';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DetailScreen from './DetailScreen'
class HomeScreen extends Component {
  state = {
    data: [],
    images: [],
    displayedImage: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/book')
      .then(data => {
        console.log(data.data.data);
        this.setState({
          images: data.data.data,
          // displayedImage: data.data.filter(index =>index.title.includes("One Piece"))
        });
        console.log(this.displayedImage);
        // this.setState({images:data.data.data});
        // console.log(this.state.images[0].link);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          {/* <NavBar data={this.state.images}/> */}
          <NavBar />
          {this.state.images.length > 0 ?
            // this.state.images.map(data =>
            //   <div className="container">
            //     <div className="row">
            //       <div className="col-6">
            //         <div className="card" style={{width: "18rem"}}>
            //         <img src={data.avartaLink} className="card-img-top" alt="..."></img>
            //           <div className="card-body">
            //             <h5 className="card-title">{data.title}</h5>
            //             <p className="card-text">{data.description}</p>
            //             <Link to={"/aa"} >
            //               <p className="btn btn-primary">read</p>
            //             </Link>

            //           </div>
            //         </div>
            //       </div>
            //     </div>


            //   </div>
            // )
            <div className="container">
              <div className="row">
                {
                  this.state.images.map((val) => {
                    return <div className="col-4">
                      <div className="card" style={{ width: "18rem" }} >
                        <img src={val.avartaLink} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                          <h5 className="card-title">{val.title}</h5>
                          <Link to={`/book/${val._id}`}>
                            <p className="btn btn-primary">Read</p>
                          </Link>
                          <p className="card-text">{val.description}</p>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
            : ''}
        </div>
      </BrowserRouter>

    );
  }

}

export default HomeScreen;
