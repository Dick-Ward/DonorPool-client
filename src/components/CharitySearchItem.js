import React from "react";
import { Row, Col } from "reactstrap";

const CharitySearchItem = props => {
  return (
    <div className="charityCard ">
      <Row>
        <Col sm="1">
          <img className="searchCardImage" src={props.icon} alt={props.name} />
        </Col>
        <Col>
          <h3>{props.name}</h3>
          <p>{props.tagline}</p>
        </Col>
      </Row>
    </div>
  );
};

export default CharitySearchItem;
