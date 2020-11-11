import React, { Component } from "react";

import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./Components/ProtectedRoute";
import Event from "./Containers/Event/Event";
import Navbar from "./Containers/Navbar/Navbar";
import Marker from "./Containers/Marker/Marker";
import Home from './Containers/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar />
       
        <Switch>
          {/* <ProtectedRoute
            isAuth={this.props.isAuth}
            path="/event"
            component={Event}
          /> */}
          <Route path='/events' component={Event} />
          <Route path='/markers' component={Marker} />
          {/* <Route path="/register" component={Register} />
          <Route path="/login" component={Login} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
