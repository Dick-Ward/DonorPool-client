import React from "react";

const CharityMini = props => {
  return (
    <div className="charityCard">
      <img className="cardImage" src={props.icon} alt={props.name} />
      <div className="cardByline">${props.pledge}/mo</div>
      <div
        id={props.id}
        onClick={props.handleClick}
        className="cardText clickable"
      >
        {props.name}
      </div>
      <div className="cardDescription">{props.tagline}</div>
    </div>
  );
};

export default CharityMini;
