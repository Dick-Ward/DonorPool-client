import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="loginUsername">Username:</Label>
          <Input
            type="text"
            name="username"
            id="loginUsername"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword">Password:</Label>
          <Input
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
};

export default Login;
