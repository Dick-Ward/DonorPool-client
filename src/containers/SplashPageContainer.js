import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Button } from "reactstrap";

class SplashPageContainer extends React.Component {
  state = {
    active: null
  };
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <Button className="Login">Log In</Button>
        <Button className="Signup">Sign Up</Button>
      </div>
    );
  }
}

export default SplashPageContainer;
