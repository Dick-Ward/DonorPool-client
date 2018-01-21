import React from "react";
import Donation from "../components/Donation";
import { connect } from "react-redux";
import * as actions from "../actions";

class ModifyDonationsContainer extends React.Component {
  handleClick = event => {
    this.props.updatesView();
  };
  render() {
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
          userId={this.props.user.id}
          charity={charity}
        />
      );
    });

    return (
      <div>
        <button onClick={this.handleClick}>Back</button>
        {charityList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  charities: state.auth.user.supported,
  user: state.auth.user
});

export default connect(mapStateToProps, actions)(ModifyDonationsContainer);
