import React from "react";
import Donation from "../components/Donation";
import { connect } from "react-redux";
import * as actions from "../actions";

class ModifyDonationsContainer extends React.Component {
  handleClick = event => {
    event.preventDefault();
  };
  render() {
    console.log(this.props.state);
    const { charities } = this.props;
    const alphabeticalCharities = charities.sort((char, char2) => {
      return char.name > char2.name;
    });
    const charityList = alphabeticalCharities.map(charity => {
      return (
        <Donation
          key={charity.support_id}
          name={charity.name}
          icon={charity.icon}
          pledge={charity.pledge}
          tagline={charity.tagline}
          supportId={charity.support_id}
          charity={charity}
        />
      );
    });

    return <div>{charityList}</div>;
  }
}

const mapStateToProps = state => ({
  charities: state.auth.user.supported,
  user: state.auth.user
});

export default connect(mapStateToProps, actions)(ModifyDonationsContainer);
