import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import CharityManagerSignup from "../components/CharityManagerSignup";
import { Button } from "reactstrap";
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
        {this.state.active === null ? (
          <div>
            <Button onClick={this.handleClick} className="Login" value="Login">
              Log In
            </Button>
            <Button
              onClick={this.handleClick}
              className="Signup"
              value="Signup"
            >
              Sign Up
            </Button>
            
            <Button
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
      </div>
    );
  }
}

export default connect(null, actions)(SplashPageContainer);
