import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardImg,
  Button
} from "reactstrap";

const Charity = () => {
  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardTitle>
          <img
            src="https://i.imgur.com/T6N6SGz.png"
            className="fullCardImage"
          />
          Life After Hate
        </CardTitle>

        <div style={{ maxHeight: "500px", overflow: "hidden" }}>
          <CardImg src="https://i.imgur.com/fQnA7uZ.jpg" />
        </div>

        <div className="byLine">"Advocating for justice and equality"</div>
        <ul>
          <div>Catgory: Intergroup, Race Relations</div>
          <div>Cause: Civil Rights, Social Action, Advocacy</div>
          <div />
        </ul>
        <a href="https://www.lifeafterhate.org/">Website</a>
        <Button style={{ float: "right" }}> Support Life After Hate </Button>
      </CardBody>
    </Card>
  );
};

export default Charity;
//
// tagline: "Advocating for justice and equality",
//   URL: "https://www.lifeafterhate.org/",
//   category: "Intergroup, Race Relations",
//   cause: "	Civil Rights, Social Action, Advocacy",
//    picture: "https://i.imgur.com/fQnA7uZ.jpg",
//     icon: "https://i.imgur.com/T6N6SGz.png")
