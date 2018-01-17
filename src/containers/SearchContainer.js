import React from "react";
import Search from "../components/Search";
import { connect } from "react-redux";
import * as actions from "../actions";

class SearchContainer extends React.Component {
  handleChange = event => {
    this.props.handleSearch(event.target.value);
    if (event.target.value === "" && this.props.user.supported.length !== 0) {
      this.props.updatesView();
    } else {
      this.props.searchView();
    }
  };

  render() {
    return <Search handleChange={this.handleChange} />;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, actions)(SearchContainer);
