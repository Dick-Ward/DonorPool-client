import React from "react";
import { Card, CardBody, CardTitle, CardImg, Button } from "reactstrap";

const Charity = props => {
  const { charity } = props;
  console.log(charity);

  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardTitle>
          <img
            src={charity.icon}
            alt={charity.name}
            className="fullCardImage"
          />
          {charity.name}
        </CardTitle>

        <div style={{ maxHeight: "500px", overflow: "hidden" }}>
          <CardImg src={charity.picture} alt={charity.name} />
        </div>

        <div className="byLine">{charity.tagline}</div>
        <div style={{ float: "right" }}>
          <a href={charity.URL} target="_blank">
            Website
          </a>
        </div>
        <ul>
          <div>Catgory: {charity.category}</div>
          <div>Cause: {charity.cause}</div>
        </ul>
        <div>{charity.mission}</div>
        <Button style={{ float: "right" }}> Support {charity.name} </Button>
      </CardBody>
    </Card>
  );
};

export default Charity;
