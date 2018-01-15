import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Button } from "reactstrap";

class SplashPageContainer extends React.Component {
  state = {
    active: null
  };
  handleClick = event => {
    if (this.state.active != null) {
      this.setState({ active: null });
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
          </div>
        ) : (
          <Button onClick={this.handleClick}>Back</Button>
        )}
        {this.state.active === "Login" ? <Login /> : null}
        {this.state.active === "Signup" ? <Signup /> : null}
      </div>
    );
  }
}

export default SplashPageContainer;
