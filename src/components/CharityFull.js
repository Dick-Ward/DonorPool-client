import React from "react";
import { Card, CardBody, CardTitle, CardImg, Button } from "reactstrap";

const Charity = () => {
  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardTitle>
          <img
            src="https://i.imgur.com/T6N6SGz.png"
            alt="Life After Hate Logo"
            className="fullCardImage"
          />
          Life After Hate
        </CardTitle>

        <div style={{ maxHeight: "500px", overflow: "hidden" }}>
          <CardImg
            src="https://i.imgur.com/fQnA7uZ.jpg"
            alt="Life After Hate"
          />
        </div>

        <div className="byLine">"Advocating for justice and equality"</div>
        <div style={{ float: "right" }}>
          <a href="https://www.lifeafterhate.org/">Website</a>
        </div>
        <ul>
          <div>Catgory: Intergroup, Race Relations</div>
          <div>Cause: Civil Rights, Social Action, Advocacy</div>
        </ul>
        <div>
          Life After Hate, Inc., a 501(c)(3) U.S. nonprofit, was created in 2011
          by former members of the American violent far-right extremist
          movement. Through powerful stories of transformation and unique
          insight gleaned from decades of experience, we serve to inspire,
          educate, guide, and counsel. Whether working with individuals who wish
          to leave a life of hate and violence or helping organizations
          (community, educational, civic, government, etc.) grappling with the
          causes of intolerance and racism, Life After Hate works to counter the
          seeds of hate we once planted. Through personal experience and highly
          unique skill sets, we have developed a sophisticated understanding
          about what draws individuals to extremist groups and, equally
          important, why they leave. Compassion is the opposite of judgment and
          we understand the roles compassion and empathy play in healing
          individuals and communities.
        </div>
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
