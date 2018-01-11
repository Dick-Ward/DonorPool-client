import React from "react";

const FeaturedDonors = () => {
  const icon = "http://via.placeholder.com/60x60";

  return (
    <div className="charityCard">
      <img className="cardImage" src={icon} />
      <div className="cardByline">$xx/mo</div>
      <div className="cardHeadline">Charity Name</div>
      <div className="cardDescription">One line description of charity.</div>
    </div>
  );
};

export default FeaturedDonors;
