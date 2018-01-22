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
          value={props.searchQuery}
          onSubmit={props.handleSubmit}
        />
        <FormText color="muted">
          Search matches by title, cause, and mission statement.
        </FormText>
      </FormGroup>
    </Form>
  );
};

export default Search;
