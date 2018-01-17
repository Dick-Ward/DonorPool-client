import React from "react";
import { Row, Col } from "reactstrap";

const CharitySearchItem = props => {
  return (
    <div className="charityCard ">
      <Row>
        <Col xl="1" sm="2">
          <img className="searchCardImage" src={props.icon} alt={props.name} />
        </Col>
        <Col>
          <h3>{props.name}</h3>
          <p>{props.tagline}</p>
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default CharitySearchItem;
