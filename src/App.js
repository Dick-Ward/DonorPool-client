import React, { Component } from "react";
import DonorViewContainer from "./containers/DonorViewContainer";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";
import fetchUser from "./actions";

import "./App.css";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.fetchUser}> log in </button>
        <Navigation />
        <DonorViewContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { fetchUser: fetchUser })(App);
