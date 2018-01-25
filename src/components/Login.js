import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    error: null
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      this.props.handleError("Make sure you fill out every part of the form.");
    } else {
      this.props.login(
        this.state.username,
        this.state.password,
        this.props.history
      );
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Container>
        <h3>Log In</h3>
        {this.props.error ? (
          <Alert color="danger">{this.props.error}</Alert>
        ) : null}

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
          <Button
            style={{
              color: "green",
              backgroundColor: "white",
              margin: "10px"
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  error: state.auth.error
});

export default withRouter(connect(mapStateToProps, actions)(Login));
