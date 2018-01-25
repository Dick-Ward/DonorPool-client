import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

import {
  Alert,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    firstName: "",
    lastName: "",
    error: null
  };
  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.email === "" ||
      this.state.firstName === "" ||
      this.state.lastName === ""
    ) {
      this.props.handleError("Make sure you fill out every part of the form.");
    } else if (this.state.password !== this.state.passwordConfirm) {
      this.props.handleError("Passwords do not match.");
    } else {
      this.props.signup(
        this.state.username,
        this.state.password,
        this.state.email,
        this.state.firstName,
        this.state.lastName,
        this.props.history
      );
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const passwordValid = this.state.password === this.state.passwordConfirm;
    return (
      <Container>
        <h3>Sign Up</h3>
        {this.props.error ? (
          <Alert color="danger">{this.props.error}</Alert>
        ) : null}
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="signupFirstName">First Name:</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  id="signupFirstName"
                  placeholder="First Name"
                  maxLength="50"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="signupLastName">Last Name:</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="lastName"
                  id="signupLastName"
                  placeholder="Last Name"
                  maxLength="50"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="signupUsername">Username:</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  id="signupUsername"
                  placeholder="Username"
                  maxLength="50"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="signupEmail">Email:</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="signupEmail"
                  placeholder="Email"
                  maxLength="50"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="signupPassword">Password:</Label>
                <Input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  id="signupPassword"
                  placeholder="Password"
                  maxLength="50"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="signupPasswordConfirm">Confirm Password:</Label>
                <Input
                  onChange={this.handleChange}
                  type="password"
                  name="passwordConfirm"
                  id="signupPasswordConfirm"
                  placeholder="Confirm Password"
                  maxLength="50"
                  valid={passwordValid}
                />
                <FormFeedback>Passwords must match</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
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

export default withRouter(connect(mapStateToProps, actions)(Signup));
