import React from "react";
import Donation from "../components/Donation";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Form, Button } from "reactstrap";

class ModifyDonationsContainer extends React.Component {
  handleClick = event => {
    event.preventDefault();
  };
  render() {
    const { charities } = this.props;
    const alphabeticalCharities = charities.sort((char, char2) => {
      return char.name > char2.name;
    });
    const charityList = alphabeticalCharities.map(charity => {
      return (
        <Donation
          key={charity.id}
          id={charity.id}
          name={charity.name}
          icon={charity.icon}
          plege={charity.pledge}
          tagline={charity.tagline}
        />
      );
    });

    console.log(alphabeticalCharities);
    return (
      <Form>
        {charityList}
        <Button onClick={this.handleClick}>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  charities: state.auth.user.supported
});

export default connect(mapStateToProps, actions)(ModifyDonationsContainer);
