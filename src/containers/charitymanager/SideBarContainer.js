import React from "react";
import { Button, Container } from "reactstrap";
class SideBarContainer extends React.Component {
  render() {
    return (
      <div>
        <Container>
          Keep your information up-to date to make sure customers know that
          they're donating to a trusted source.
          <div style={{ margin: "10px" }}>
            <Button>Edit Charity Information</Button>
          </div>
          <div>
            As a charity manager at DonorPool, you have the power to engage with
            your donors as little or as often as you'd like! Post an update to
            tell donors what you're up to, raise awareness of events, or ask for
            a boost in donations for an upcoming project.
          </div>
          <div style={{ margin: "10px" }}>
            <Button>Add an Update</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default SideBarContainer;
