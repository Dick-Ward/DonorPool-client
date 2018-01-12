import React, { Component } from "react";
import DonorViewContainer from "./containers/DonorViewContainer";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";
import fetchUser from "./actions";
import Login from "./components/Login";

import "./App.css";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Navigation />
        {/* <DonorViewContainer /> */}
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { fetchUser: fetchUser })(App);
