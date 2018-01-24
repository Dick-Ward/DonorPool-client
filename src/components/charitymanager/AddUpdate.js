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

class AddUpdate extends React.Component {
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" id="title" placeholder="Title" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="content">Update Content</Label>
          <Input
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

export default AddUpdate;
