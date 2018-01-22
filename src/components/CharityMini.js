import React from "react";
import { Row, Col } from "reactstrap";

const CharityMini = props => {
  return (
    <div className="charityCard">
      <Row>
        <Col sm="2" xs="12">
          <img className="cardImage" src={props.icon} alt={props.name} />
        </Col>
        <Col>
          <div className="cardByline">${props.pledge}/mo</div>
          <div id={props.id} onClick={props.handleClick} className="clickable">
            {props.name}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CharityMini;
