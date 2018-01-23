import React from "react";
import { Row, Col } from "reactstrap";
import DonorListContainer from "./DonorListContainer";
import SideBarContainer from "./SideBarContainer";
import CharityCard from "../../components/charitymanager/CharityCard";

class CharityManagerViewContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" md="3" style={{ backgroundColor: "RGBa(0,255,0,.2)" }}>
            <div>
              <SideBarContainer />
            </div>
          </Col>

          <Col xs="12" md="6">
            <div>
              <CharityCard />
            </div>
          </Col>

          <Col xs="12" md="3">
            <div>
              <DonorListContainer />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CharityManagerViewContainer;
