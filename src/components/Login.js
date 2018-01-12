import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Container>
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

export default connect(null, actions)(Login);
