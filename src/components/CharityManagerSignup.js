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

class CharityManagerSignup extends React.Component {
  state = {
    username: "",
    password: "",
    passwordConfirm: "",
    charityName: "",
    tagline: "",
    URL: "",
    mission: "",
    icon: "",
    banner: "",
    error: null
  };
  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.charityName === "" ||
      this.state.tagline === "" ||
      this.state.URL === "" ||
      this.state.mission === ""
    ) {
      this.props.handleError("Make sure you fill out every part of the form.");
    } else if (this.state.password !== this.state.passwordConfirm) {
      this.props.handleError("Passwords do not match.");
    } else {
      this.props.signupCharity(
        this.state.username,
        this.state.password,
        this.state.charityName,
        this.state.tagline,
        this.state.URL,
        this.state.mission,
        this.state.icon,
        this.state.banner,
        this.props.history
      );
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFile = event => {
    this.setState({ [event.target.name]: event.target.files[0] });
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
                <Label for="charityName">Charity Name:</Label>
                <Input
                  onChange={this.handleChange}
                  type="charityName"
                  name="charityName"
                  id="charityName"
                  placeholder="Charity Name"
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
          <Row>
            <Col>
              <FormGroup>
                <Label for="tagline">Tagline:</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="tagline"
                  id="tagline"
                  placeholder="Tagline"
                  maxLength="100"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="CharityUrl">Website Address:</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="URL"
                  id="CharityUrl"
                  placeholder="Website Address"
                  maxLength="50"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="icon">Charity Icon (50px by 50px)</Label>
                <Input
                  onChange={this.handleFile}
                  type="file"
                  name="icon"
                  id="icon"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="banner">
                  Charity Bannner Picture (700px by 400px)
                </Label>
                <Input
                  onChange={this.handleFile}
                  type="file"
                  name="banner"
                  id="banner"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="mission">Mission Statement</Label>
                <Input
                  onChange={this.handleChange}
                  type="textarea"
                  name="mission"
                  id="mission"
                  placeholder="Mission Statement"
                  maxLength="1000"
                />
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

export default withRouter(
  connect(mapStateToProps, actions)(CharityManagerSignup)
);
