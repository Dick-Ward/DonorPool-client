import React from "react";
import { Container, Row, Col } from "reactstrap";
import DonorFeedContainer from "./DonorFeedContainer";
import CharityFeedContainer from "./CharityFeedContainer";
import RightSidebarContainer from "./RightSidebarContainer";
import SearchContainer from "./SearchContainer";

class DonorViewContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col />

          <Col sm="6">
            <SearchContainer />
          </Col>

          <Col />
        </Row>

        <Row>
          <Col style={{ backgroundColor: "red" }}>
            <DonorFeedContainer />
          </Col>

          <Col sm="6" style={{ backgroundColor: "green" }}>
            <CharityFeedContainer />
          </Col>

          <Col style={{ backgroundColor: "yellow" }}>
            <RightSidebarContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DonorViewContainer;
