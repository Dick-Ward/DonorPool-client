import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  CardSubtitle
} from "reactstrap";

const CharityUpdate = props => {
  console.log(props);
  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardSubtitle>Charity Name</CardSubtitle>
        <CardImg src={props.picture} />

        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.content}</CardText>
      </CardBody>
    </Card>
  );
};

export default CharityUpdate;
