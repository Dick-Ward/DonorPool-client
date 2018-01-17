import React from "react";
import { Row, Col } from "reactstrap";
import DonorFeedContainer from "./DonorFeedContainer";
import RightSidebarContainer from "./RightSidebarContainer";
import SearchContainer from "./SearchContainer";
import { connect } from "react-redux";

class DonorViewContainer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col />

          <Col xs="10" sm="6">
            <SearchContainer handleToggle={this.handleToggle} />
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
}

const mapStateToProps = state => ({
  user: state.auth.user,
  searchQuery: state.search.searchQuery,
  active: state.views.donorFeed
});

export default connect(mapStateToProps)(DonorViewContainer);
