import React from "react";
import { Row, Col } from "reactstrap";

const CharitySearchItem = props => {
  return (
    <div className="charityCard ">
      <Row>
        <Col xl="1" sm="2">
          <img
            id={props.id}
            className="searchCardImage clickable"
            src={props.icon}
            alt={props.name}
            onClick={props.handleClick}
          />
        </Col>
        <Col>
          <h3 id={props.id} className="clickable" onClick={props.handleClick}>
            {props.name}
          </h3>
          <p className="clickable" id={props.id} onClick={props.handleClick}>
            {props.tagline}
          </p>
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default CharitySearchItem;
