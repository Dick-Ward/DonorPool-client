import React, { Component } from "react";
import DonorViewContainer from "./containers/DonorViewContainer";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";
import * as actions from "./actions";
import Login from "./components/Login";
import Signup from "./components/Signup";

import "./App.css";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Navigation />
        {/* <DonorViewContainer /> */}
        <Login />
        {/* <Signup /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, actions)(App);
