import React from "react";

import { Card, CardBody, CardSubtitle, CardTitle, CardImg } from "reactstrap";

const FeaturedDonors = props => {
  const supported = props.supported.map(charity => (
    <li key={charity}>{charity}</li>
  ));

  const name = `${props.firstName} ${props.lastName}`;
  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardImg
          style={{ maxHeight: "150px", maxWidth: "150px" }}
          src={props.picture}
        />
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>Supports:</CardSubtitle>
        {supported}
      </CardBody>
    </Card>
  );
};

export default FeaturedDonors;
