import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardSubtitle } from "reactstrap";

const CharityFeed = () => {
  const charityCard = (
    <Card style={{ margin: "5px" }}>
      <CardImg src="http://via.placeholder.com/500x100" />
      <CardTitle>Charity Name</CardTitle>
      <CardSubtitle>Subtitle, aw yeah</CardSubtitle>
      <CardBody>Here's a bunch of stuff we been doin</CardBody>
    </Card>
  );
  return (
    <div>
      {charityCard}
      {charityCard}
      {charityCard}
      {charityCard}
      {charityCard}
      {charityCard}
    </div>
  );
};

export default CharityFeed;
