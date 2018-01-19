import React from "react";
import CharitySearchItem from "./CharitySearchItem";
import { connect } from "react-redux";
import * as actions from "../actions";

class SearchResults extends React.Component {
  handleClick = event => {
    const id = parseInt(event.target.id, 10);
    const individualCharity = this.props.charities.find(charity => {
      return charity.id === id;
    });
    this.props.individualCharityView(
      individualCharity,
      this.props.supported.length > 0
    );
  };

  render() {
    console.log(this.props);
    const { charities } = this.props;

    const charityMap = charities.map(charity => {
      return (
        <CharitySearchItem
          id={charity.id}
          name={charity.name}
          tagline={charity.tagline}
          icon={charity.icon}
          category={charity.category}
          key={charity.id}
          handleClick={this.handleClick}
        />
      );
    });

    return (
      <div>
        {this.props.doesUserSupport ? (
          <button onClick={this.props.resetSearch}>Back</button>
        ) : null}
        {charityMap}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  search: state.search.searchQuery,
  supported: state.auth.user.supported
});

export default connect(mapStateToProps, actions)(SearchResults);
