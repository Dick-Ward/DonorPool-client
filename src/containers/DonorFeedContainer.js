import React from "react";
import DonorFeed from "../components/DonorFeed";

class DonorFeedContainer extends React.Component {
  render() {
    console.log(this.props);
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
      </div>
    );
  }
}

export default DonorFeedContainer;
