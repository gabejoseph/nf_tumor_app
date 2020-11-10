import React, { Component } from "react";

import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./Components/ProtectedRoute";
import Event from "./Containers/Event/Event";
import Marker from "./Containers/Marker/Marker";
import Main from "./Containers/Main/Main";
import BodyCanvas from "./Components/BodyCanvas/BodyCanvas";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          {/* <ProtectedRoute
            isAuth={this.props.isAuth}
            path="/event"
            component={Event}
          /> */}
          < Route path='/welcome' component={Main} />
          < Route path='/events' component={Event} />
          < Route path='/markers' component={Marker} />
          < Route path='/canvas' component={BodyCanvas} />
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
