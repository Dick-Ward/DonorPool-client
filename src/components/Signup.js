import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(
      this.state.username,
      this.state.password,
      this.props.history
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Container>
        <h3>Sign Up</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="loginUsername">Username:</Label>
            <Input
              onChange={this.handleChange}
              type="text"
              name="username"
              id="loginUsername"
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="loginPassword">Password:</Label>
            <Input
              onChange={this.handleChange}
              type="password"
              name="password"
              id="loginPassword"
              placeholder="Password"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(connect(null, actions)(Signup));
