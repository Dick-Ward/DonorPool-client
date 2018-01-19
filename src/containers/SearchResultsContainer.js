import React from "react";
import SearchResults from "../components/SearchResults";
import { connect } from "react-redux";

class SearchResultsContainer extends React.Component {
  render() {
    const query = this.props.searchQuery;
    let searchedCharities;
    this.props.searchQuery === ""
      ? (searchedCharities = this.props.charities)
      : (searchedCharities = this.props.charities.filter(charity => {
          return (
            charity.name.toLowerCase().includes(query.toLowerCase()) ||
            charity.tagline.toLowerCase().includes(query.toLowerCase()) ||
            charity.mission.toLowerCase().includes(query.toLowerCase())
          );
        }));
    return (
      <SearchResults
        doesUserSupport={this.props.doesUserSupport}
        charities={searchedCharities}
      />
    );
  }
}

const mapStateToProps = state => ({
  charities: state.auth.charities_list,
  searchQuery: state.search.searchQuery
});

export default connect(mapStateToProps)(SearchResultsContainer);
