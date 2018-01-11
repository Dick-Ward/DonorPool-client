import React from "react";

const icon = "http://via.placeholder.com/60x60";

const DonorFeed = () => {
  const card = (
    <div className="charityCard">
      <img className="cardImage" src={icon} />
      <div className="cardByline">$xx/mo</div>
      <div className="cardHeadline">Charity Name</div>
      <div className="cardDescription">One line description of charity.</div>
    </div>
  );
  return (
    <div>
      {card}
      {card}
      {card}
      {card}
      {card}
      {card}
    </div>
  );
};

export default DonorFeed;
