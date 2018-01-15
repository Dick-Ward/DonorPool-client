import React from "react";

const CharityMini = props => {
  return (
    <div className="charityCard">
      <img className="cardImage" src={props.icon} alt="placeholder" />
      <div className="cardByline">$xx/mo</div>
      <div className="cardText">{props.name}</div>
      <div className="cardText">{props.tagline}</div>
    </div>
  );
};

export default CharityMini;
