import React from "react";

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  CardSubtitle,
  Container
} from "reactstrap";

const featuredDonor = (
  <Card style={{ margin: "5px" }}>
    <CardBody>
      <CardImg
        style={{ maxHeight: "150px", maxWidth: "150px" }}
        src="http://via.placeholder.com/50x50"
      />

      <CardTitle>Celebrity Name</CardTitle>
      <CardText>
        Holy crap, check out this cool thing we did with the money you've been
        giving us! Isn't it great?
      </CardText>
    </CardBody>
  </Card>
);

const FeaturedDonors = () => {
  return (
    <div>
      {featuredDonor}
      {featuredDonor}
      {featuredDonor}
    </div>
  );
};

export default FeaturedDonors;
