import React from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../actions";

class AddUpdate extends React.Component {
  state = {
    title: "",
    content: "",
    image: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createUpdate(
      this.state.title,
      this.state.content,
      this.props.charityId
    );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
              <Input type="file" name="image" id="image" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  charityId: state.auth.management.charity.id
});

export default connect(mapStateToProps, actions)(AddUpdate);
