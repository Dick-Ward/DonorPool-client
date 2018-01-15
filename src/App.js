import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DonorViewContainer from "./containers/DonorViewContainer";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";
import * as actions from "./actions";
import SplashPageContainer from "./containers/SplashPageContainer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.loggedIn ? (
          <Switch>
            <Route exact path="/" component={DonorViewContainer} />
            <Route exact path="/login" component={SplashPageContainer} />
          </Switch>
        ) : (
          <SplashPageContainer />
        )}
      </div>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.fetchUser();
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser
});

export default connect(mapStateToProps, actions)(App);
