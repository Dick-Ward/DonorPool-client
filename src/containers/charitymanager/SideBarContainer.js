import React from "react";
import { Button, Container } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../actions";

class SideBarContainer extends React.Component {
  render() {
    return (
      <div style={{ padding: "10px" }}>
        <Container>
          Keep your information up-to date to make sure customers know that
          they're donating to a trusted source.
          <div style={{ margin: "10px" }}>
            <Button onClick={this.props.editCharity}>
              Edit Charity Information
            </Button>
          </div>
          <div>
            As a charity manager at DonorPool, you have the power to engage with
            your donors as little or as often as you'd like! Post an update to
            tell donors what you're up to, raise awareness of events, or ask for
            a boost in donations for an upcoming project.
          </div>
          <div style={{ margin: "10px" }}>
            <Button onClick={this.props.addUpdate}>Add an Update</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(null, actions)(SideBarContainer);
