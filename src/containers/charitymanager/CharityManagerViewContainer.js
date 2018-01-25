import React from "react";
import { Row, Col } from "reactstrap";
import DonorListContainer from "./DonorListContainer";
import SideBarContainer from "./SideBarContainer";
import { connect } from "react-redux";

class CharityManagerViewContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" md="3">
            <div>
              <SideBarContainer />
            </div>
          </Col>

          <Col xs="12" md="6">
            <div>{this.props.active}</div>
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
const mapStateToProps = state => ({
  active: state.views.managerFeed
});

export default connect(mapStateToProps)(CharityManagerViewContainer);
