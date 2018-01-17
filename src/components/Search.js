import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Search = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="search">Search for a Charity</Label>
        <Input
          onChange={props.handleChange}
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <FormText color="muted">
          Search matches by title, cause, and description - in that order.
        </FormText>
      </FormGroup>
    </Form>
  );
};

export default Search;
