import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Button } from "reactstrap";

class SplashPageContainer extends React.Component {
  state = {
    active: null
  };
  handleClick = event => {
    if (this.state.active === event.target.value) {
      this.setState({ active: null });
    } else {
      this.setState({ active: event.target.value });
    }
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick} className="Login" value="Login">
          Log In
        </Button>
        <Button onClick={this.handleClick} className="Signup" value="Signup">
          Sign Up
        </Button>
        {this.state.active === "Login" ? <Login /> : null}
        {this.state.active === "Signup" ? <Signup /> : null}
      </div>
    );
  }
}

export default SplashPageContainer;
