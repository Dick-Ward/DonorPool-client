import React from "react";
import { Row, Col } from "reactstrap";
import DonorFeedContainer from "./DonorFeedContainer";
import CharityFeedContainer from "./CharityFeedContainer";
import RightSidebarContainer from "./RightSidebarContainer";
import SearchContainer from "./SearchContainer";
import CharityFull from "../components/CharityFull";
import { connect } from "react-redux";

class DonorViewContainer extends React.Component {
  render() {
    console.log(this.props.user.supported.length);
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
          <Col>
            <DonorFeedContainer />
          </Col>

          <Col sm="6">
            {this.props.user.supported.length > 0 ? (
              <CharityFeedContainer />
            ) : (
              <CharityFull />
            )}
          </Col>

          <Col>
            <RightSidebarContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(DonorViewContainer);
