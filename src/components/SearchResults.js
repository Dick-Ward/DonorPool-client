import React from "react";
import CharitySearchItem from "./CharitySearchItem";

const SearchResults = props => {
  const { charities } = props;
  const charityMap = charities.map(charity => {
    return (
      <CharitySearchItem
        id={charity.id}
        name={charity.name}
        tagline={charity.tagline}
        icon={charity.icon}
        category={charity.category}
        key={charity.id}
      />
    );
  });
  console.log(charities);
  return <div>{charityMap}</div>;
};

export default SearchResults;
