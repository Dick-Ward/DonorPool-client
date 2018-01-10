import React, { Component } from "react";
import DonorViewContainer from "./containers/DonorViewContainer";
import Navigation from "./components/Navigation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <DonorViewContainer />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px"
          }}
        >
          <footer>
            <p
              style={{
                color: "RGB(31,31,31)",
                backgroundColor: "RGBa(50, 50, 50, .05)",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
                borderBottomRightRadius: "5px",
                borderBottomLeftRadius: "5px"
              }}
            >
              &copy; 2017 Dick Ward |{" "}
              <a
                style={{ color: "RGB(14,14,14)" }}
                href="mailto:thedickward@gmail.com"
              >
                TheDickWard@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
