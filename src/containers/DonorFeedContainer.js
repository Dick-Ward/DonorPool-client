import React from "react";
import DonorFeed from "../components/DonorFeed";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

class DonorFeedContainer extends React.Component {
  handleClick = event => {
    this.props.modifyDonationsView();
  };
  render() {
    return (
      <div
        style={{ position: "sticky", top: "20px" }}
        className="sideContainer"
      >
        <div className="categoryTitle">My Charities</div>
        {this.props.user.supported.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            None! Go pick a charity to support!
          </div>
        ) : null}
        <DonorFeed />
        {this.props.user.supported.length === 0 ? null : (
          <Button onClick={this.handleClick}> Edit Donations </Button>
        )}
      </div>
    );
  }
}

export default connect(null, actions)(DonorFeedContainer);
