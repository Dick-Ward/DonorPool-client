import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Search = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="search">Search for a Charity</Label>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <FormText color="muted">All the cool kids are doing it!</FormText>
      </FormGroup>
    </Form>
  );
};

export default Search;
