import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

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

class EditCharity extends React.Component {
  state = {
    charityName: "",
    tagline: "",
    URL: "",
    icon: "",
    banner: "",
    mission: "",
    error: null
  };
  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.charityName === "" ||
      this.state.tagline === "" ||
      this.state.URL === "" ||
      this.state.mission === ""
    ) {
      this.props.handleError("Make sure you fill out every part of the form.");
    } else {
      console.log(
        this.state.charityName,
        this.state.tagline,
        this.state.URL,
        this.state.mission
      );
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state);
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
                <Label for="charityName">Charity Name:</Label>
                <Input
                  onChange={this.handleChange}
                  type="charityName"
                  name="charityName"
                  id="charityName"
                  value={this.state.charityName}
                  maxLength="50"
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
                  value={this.state.URL}
                  maxLength="50"
                />
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
                  value={this.state.tagline}
                  maxLength="100"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="icon">Charity Icon (50px by 50px)</Label>
                <Input
                  onChange={this.handleChange}
                  type="file"
                  name="icon"
                  id="icon"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="banner">
                  Charity Bannner Picture (700px x 400px)
                </Label>
                <Input
                  onChange={this.handleChange}
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
                  value={this.state.mission}
                  rows="6"
                  maxLength="1000"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
  componentDidMount() {
    this.setState({
      charityName: this.props.charity.name,
      tagline: this.props.charity.tagline,
      URL: this.props.charity.URL,
      icon: this.props.charity.icon,
      banner: this.props.charity.banner,
      mission: this.props.charity.mission
    });
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  charity: state.auth.management.charity
});

export default connect(mapStateToProps, actions)(EditCharity);
