import React from "react";
import SearchResults from "../components/SearchResults";
import { connect } from "react-redux";

class SearchResultsContainer extends React.Component {
  render() {
    console.log(this.props.searchQuery);
    const query = this.props.searchQuery;
    let searchedCharities;
    this.props.searchQuery === ""
      ? (searchedCharities = this.props.charities)
      : (searchedCharities = this.props.charities.filter(charity => {
          return charity.name.toLowerCase().includes(query.toLowerCase());
        }));
    return <SearchResults charities={searchedCharities} />;
  }
}

const mapStateToProps = state => ({
  charities: state.auth.charities_list,
  searchQuery: state.search.searchQuery
});

export default connect(mapStateToProps)(SearchResultsContainer);
