import React, { Component } from "react";

import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./Components/ProtectedRoute";
import Event from "./Containers/Event/Event";
import Navbar from "./Containers/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar />
        < Event />
        <Switch>
          {/* <ProtectedRoute
            isAuth={this.props.isAuth}
            path="/event"
            component={Event}
          /> */}
          
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
