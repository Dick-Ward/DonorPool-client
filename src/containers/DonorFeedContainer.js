import React from "react";
import DonorFeed from "../components/DonorFeed";

class DonorFeedContainer extends React.Component {
  render() {
    return (
      <div
        style={{ position: "sticky", top: "20px" }}
        className="sideContainer"
      >
        <div className="categoryTitle">My Charities</div>
        <DonorFeed />
      </div>
    );
  }
}

export default DonorFeedContainer;
