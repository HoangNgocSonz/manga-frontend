// import React from 'react';
import './App.css';
import NavBar  from './components/NavBar';
import HomeScreen from './container/HomeScreen'
import DetailScreen from './container/DetailScreen'
import Read from './container/Read'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import {BrowserRouter, Route,Link} from "react-router-dom";

// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
        <Route exact path="/" component={HomeScreen}/>
            {/* <Route exact path="/">
              <HomeScreen/>
            </Route> */}
            <Route exact path="/book/:id" component={DetailScreen}/>
            <Route exact path="/cc" component={Read}/>
        </div>

      </BrowserRouter>
    );
  }

}

export default App;
// export default withRouter(connect(App)(DetailScreen))
