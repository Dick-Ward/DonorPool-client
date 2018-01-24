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
  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardSubtitle
          className="clickable"
          id={props.charityId}
          onClick={props.handleClick}
        >
          {props.name}
        </CardSubtitle>
        <div style={{ maxHeight: "300px", overflow: "hidden" }}>
          <CardImg src={props.picture} />
        </div>
        
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.content}</CardText>
      </CardBody>
    </Card>
  );
};

export default CharityUpdate;
