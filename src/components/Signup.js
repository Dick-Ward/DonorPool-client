import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

import {
  Button,
  Form,
  FormGroup,
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
    lastName: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(
      this.state.username,
      this.state.password,
      this.state.email,
      this.state.firstName,
      this.state.lastName,
      this.props.history
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    console.log(this.state.lastName);
    return (
      <Container>
        <h3>Sign Up</h3>

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
                <Label for="signupPasswordConfirm">Email:</Label>
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
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(connect(null, actions)(Signup));
