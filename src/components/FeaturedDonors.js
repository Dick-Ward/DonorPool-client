import React from "react";

import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

const featuredDonor = (
  <Card style={{ margin: "5px" }}>
    <CardBody>
      <CardImg
        style={{ maxHeight: "150px", maxWidth: "150px" }}
        src="http://via.placeholder.com/150x150"
      />

      <CardTitle>Celebrity Name</CardTitle>
      <CardText>
        I'm a celebrity and this is the cause that I believe in!
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
