import React from "react";
import Search from "../components/Search";
import { connect } from "react-redux";
import * as actions from "../actions";

class SearchContainer extends React.Component {
  handleChange = event => {
    this.props.handleSearch(event.target.value);
  };

  render() {
    return <Search handleChange={this.handleChange} />;
  }
}

export default connect(null, actions)(SearchContainer);
