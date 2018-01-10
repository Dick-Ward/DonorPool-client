import React from "react";
import DonorFeed from "../components/DonorFeed";
import { Card, CardBody, CardTitle } from "reactstrap";

class DonorFeedContainer extends React.Component {
  render() {
    return (
      <div>
        My Charities
        <DonorFeed />
      </div>
    );
  }
}

export default DonorFeedContainer;
