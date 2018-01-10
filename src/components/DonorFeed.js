import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const DonorFeed = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Charity Name</CardTitle>
          <CardSubtitle>$xx/mo</CardSubtitle>
          <CardText>One line description of charity</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonorFeed;
