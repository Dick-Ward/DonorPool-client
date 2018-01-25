import React from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../actions";

class AddUpdate extends React.Component {
  state = {
    title: "",
    content: "",
    image: null,
    error: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFile = event => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.title === "" ||
      this.state.content === "" ||
      this.state.image === null
    ) {
      this.props.handleError("Make sure you fill out every part of the form.");
    } else {
      this.props.createUpdate(
        this.state.title,
        this.state.content,
        this.state.image,
        this.props.charityId
      );
      this.props.charityCard();
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.props.error ? (
          <Alert color="danger">{this.props.error}</Alert>
        ) : null}
        <h3>Add Update</h3>
        <Row>
          <Col>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="title"
                id="title"
                placeholder="Title"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="content">Update Content</Label>
          <Input
            onChange={this.handleChange}
            type="textarea"
            name="content"
            id="content"
            placeholder="Update Content"
          />
        </FormGroup>
        <Row>
          <Col>
            <FormGroup>
              <Label for="image">Banner Image</Label>
              <Input
                onChange={this.handleFile}
                type="file"
                name="image"
                id="image"
                accept="image/*"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              style={{
                borderColor: "RGB(130,100,200)",
                color: "RGB(130,100,200)",
                backgroundColor: "white",
                margin: "10px"
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  charityId: state.auth.management.charity.id,
  error: state.auth.error
});

export default connect(mapStateToProps, actions)(AddUpdate);
