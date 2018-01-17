import React from "react";
import SearchResults from "../components/SearchResults";
import { connect } from "react-redux";

class SearchResultsContainer extends React.Component {
  render() {
    return <SearchResults charities={this.props.charities} />;
  }
}

const mapStateToProps = state => ({
  charities: state.auth.charities_list
});

export default connect(mapStateToProps)(SearchResultsContainer);
