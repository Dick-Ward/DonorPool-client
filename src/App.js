import React, { Component } from "react";
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
        {/* <DonorViewContainer /> */}
        <SplashPageContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, actions)(App);
