import React from "react";

const CharityMini = props => {
  return (
    <div className="charityCard">
      <img className="cardImage" src={props.icon} alt={props.name} />
      <div className="cardByline">${props.pledge}/mo</div>
      <div id={props.id} onClick={props.handleClick} className="clickable">
        {props.name}
      </div>
    </div>
  );
};

export default CharityMini;
