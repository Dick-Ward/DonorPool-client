import React from "react";
import { Row, Col } from "reactstrap";

class CharityManagerViewContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" md="3" style={{ backgroundColor: "RGBa(0,255,0,.2)" }}>
            <div> Create new Update / Edit Charity Info</div>
          </Col>

          <Col xs="12" md="6" style={{ backgroundColor: "RGBa(0,0,255,.2)" }}>
            <div> Updates / UpdateCreateForm / CharityEditForm</div>
          </Col>

          <Col xs="12" md="3" style={{ backgroundColor: "RGBa(255,0,255,.2)" }}>
            <div> Supporter names and count </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CharityManagerViewContainer;
