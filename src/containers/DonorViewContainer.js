import React from "react";
import { Row, Col } from "reactstrap";
import DonorFeedContainer from "./DonorFeedContainer";
import RightSidebarContainer from "./RightSidebarContainer";
import SearchContainer from "./SearchContainer";
import { connect } from "react-redux";
import * as actions from "../actions";

class DonorViewContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col />

          <Col xs="10" sm="6">
            <SearchContainer />
          </Col>

          <Col />
        </Row>

        <Row>
          <Col>
            <DonorFeedContainer />
          </Col>

          <Col sm="6">{this.props.active}</Col>

          <Col>
            <RightSidebarContainer />
          </Col>
        </Row>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.user.supported.length !== 0) {
      this.props.updatesView();
    } else {
      this.props.searchView();
    }
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  searchQuery: state.search.searchQuery,
  active: state.views.donorFeed
});

export default connect(mapStateToProps, actions)(DonorViewContainer);
