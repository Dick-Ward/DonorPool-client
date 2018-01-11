import React, { Component } from "react";
import DonorViewContainer from "./containers/DonorViewContainer";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <DonorViewContainer />
      </div>
    );
  }
}

export default App;
