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
      <div>
        <Jumbotron
          style={{
            backgroundColor: "RGBa(20,200,20,.2)",
            margin: "auto",
            width: "90%",
            textAlign: "center",
            boxShadow: "5px 10px"
          }}
        >
          <h1 className="display-3">Welcome to DonorPool</h1>
          <p className="lead" style={{ width: "600px", margin: "auto" }}>
            We believe that charitable giving should be easy, even for those
            without a lot to give. That's why we created DonorPool, a website
            that allows you to give as little or as much as you want to the
            causes you care about.
          </p>
          <hr className="my-2" />
          {this.state.active === null ? (
            <div>
              <Button
                outline
                style={{ backgroundColor: "white", margin: "10px" }}
                onClick={this.handleClick}
                className="Login"
                value="Login"
              >
                Log In
              </Button>
              <Button
                outline
                style={{ backgroundColor: "white", margin: "10px" }}
                onClick={this.handleClick}
                className="Signup"
                value="Signup"
              >
                Sign Up
              </Button>
              <br />
              <Button
                outline
                style={{ backgroundColor: "white", margin: "10px" }}
                onClick={this.handleClick}
                className="CharityManager"
                value="CharityManager"
              >
                Sign Up as a Charity Manager
              </Button>
            </div>
          ) : (
            <Button onClick={this.handleClick}>Back</Button>
          )}
          {this.state.active === "Login" ? <Login /> : null}
          {this.state.active === "Signup" ? <Signup /> : null}
          {this.state.active === "CharityManager" ? (
            <CharityManagerSignup />
          ) : null}
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(SplashPageContainer);
