import React from "react";
import { Row, Col } from "reactstrap";
import DonorFeedContainer from "./DonorFeedContainer";
import CharityFeedContainer from "./CharityFeedContainer";
import RightSidebarContainer from "./RightSidebarContainer";
import SearchContainer from "./SearchContainer";
import SearchResultsContainer from "./SearchResultsContainer";
import { connect } from "react-redux";

class DonorViewContainer extends React.Component {
  state = {
    active: <SearchResultsContainer />
  };

  render() {
    const thing =
      this.props.user.supported === 0 || this.props.searchQuery != "" ? (
        <SearchResultsContainer />
      ) : (
        <CharityFeedContainer />
      );
    console.log(this.props);

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

          <Col sm="6">{thing}</Col>

          <Col>
            <RightSidebarContainer />
          </Col>
        </Row>
      </div>
    );
  }
  componentDidLoad() {}
}

const mapStateToProps = state => ({
  user: state.auth.user,
  searchQuery: state.search.searchQuery
});

export default connect(mapStateToProps)(DonorViewContainer);
