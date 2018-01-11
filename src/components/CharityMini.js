import React from "react";

const CharityMini = () => {
  const icon = "http://via.placeholder.com/60x60";

  return (
    <div className="charityCard">
      <img className="cardImage" src={icon} alt="placeholder" />
      <div className="cardByline">$xx/mo</div>
      <div className="cardHeadline">Charity Name</div>
      <div className="cardDescription">One line description of charity.</div>
    </div>
  );
};

export default CharityMini;
