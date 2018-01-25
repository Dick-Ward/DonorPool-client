import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Footer from "../components/Footer";
import CharityManagerSignup from "../components/CharityManagerSignup";
import { Button, Jumbotron } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

class SplashPageContainer extends React.Component {
  state = {
    active: null
  };
  handleClick = event => {
    if (this.state.active != null) {
      this.setState({ active: null });
      this.props.handleError(null);
    } else {
      this.setState({ active: event.target.value });
    }
  };
  render() {
    return (
      <div
        className="splashBackground"
        style={{ minHeight: window.innerHeight }}
      >
        <div
          style={{
            position: "absolute",
            margin: "auto",
            top: "0",
            bottom: "450px",
            left: "0",
            right: "0",
            width: "700px",
            height: "500px"
          }}
        >
          <div
            style={{
              backgroundColor: "RGBa(255,255,255,.2)",
              margin: "auto",
              width: "90%",
              textAlign: "center",
              boxShadow: "1px 1px 2px 1px",
              padding: "20px"
            }}
          >
            <div style={{ backgroundColor: "RGBa(255,255,255,.2)" }}>
              <h1 className="display-3 splashHeadline">Welcome to DonorPool</h1>
            </div>
            <div style={{ backgroundColor: "RGBa(255,255,255,.2)" }}>
              <p className="lead" style={{ width: "550px", margin: "auto" }}>
                We believe that charitable giving should be easy, even for those
                without a lot to give. That's why we created DonorPool, a
                website that allows you to give as little or as much as you want
                to the causes you care about.
              </p>
            </div>

            <hr className="my-2" />
            {this.state.active === null ? (
              <div>
                <Button
                  outline
                  style={{
                    borderColor: "RGB(130,100,200)",
                    color: "RGB(150,100,200)",
                    backgroundColor: "white",
                    margin: "10px"
                  }}
                  onClick={this.handleClick}
                  className="Login"
                  value="Login"
                >
                  Log In
                </Button>
                <Button
                  outline
                  style={{
                    borderColor: "RGB(130,100,200)",
                    color: "RGB(130,100,200)",
                    backgroundColor: "white",
                    margin: "10px"
                  }}
                  onClick={this.handleClick}
                  className="Signup"
                  value="Signup"
                >
                  Sign Up
                </Button>
                <br />
                <Button
                  outline
                  style={{
                    borderColor: "RGB(130,100,200)",
                    color: "RGB(130,100,200)",
                    backgroundColor: "white",
                    margin: "10px"
                  }}
                  onClick={this.handleClick}
                  className="CharityManager"
                  value="CharityManager"
                >
                  Sign Up as a Charity Manager
                </Button>
              </div>
            ) : (
              <Button
                style={{
                  borderColor: "RGB(130,100,200)",
                  color: "RGB(130,100,200)",
                  backgroundColor: "white",
                  margin: "10px"
                }}
                onClick={this.handleClick}
              >
                Back
              </Button>
            )}
            {this.state.active === "Login" ? <Login /> : null}
            {this.state.active === "Signup" ? <Signup /> : null}
            {this.state.active === "CharityManager" ? (
              <CharityManagerSignup />
            ) : null}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SplashPageContainer);
