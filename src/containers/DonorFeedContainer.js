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
        style={{ position: "sticky", top: "20px", marginLeft: "15px" }}
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
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Button
              style={{
                borderColor: "RGB(130,100,200)",
                color: "RGB(130,100,200)",
                backgroundColor: "white",
                margin: "10px"
              }}
              onClick={this.handleClick}
            >
              Edit Donations
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, actions)(DonorFeedContainer);
