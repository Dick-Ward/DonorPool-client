import React from "react";
import Search from "../components/Search";

class SearchContainer extends React.Component {
  state = {
    searchQuery: ""
  };

  render() {
    console.log(this.state.searchQuery);
    return <Search />;
  }
}

export default SearchContainer;
