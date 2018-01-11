import React from "react";
import DonorFeed from "../components/DonorFeed";

class DonorFeedContainer extends React.Component {
  render() {
    return (
      <div className="sideContainer">
        <div className="categoryTitle">My Charities</div>
        <DonorFeed />
      </div>
    );
  }
}

export default DonorFeedContainer;
