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
    <Card
      style={{
        marginBottom: "15px",
        boxShadow: "1px 1px 2px 1px"
      }}
    >
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
