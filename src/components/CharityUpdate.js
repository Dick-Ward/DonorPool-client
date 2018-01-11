import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  CardSubtitle
} from "reactstrap";

const CharityUpdate = () => {
  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardSubtitle>Charity Name</CardSubtitle>
        <CardImg src="http://via.placeholder.com/700x150" />

        <CardTitle>Update Headline</CardTitle>
        <CardText>
          Holy crap, check out this cool thing we did with the money you've been
          giving us! Isn't it great?
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CharityUpdate;
