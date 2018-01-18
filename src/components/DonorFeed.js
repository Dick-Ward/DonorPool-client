import React from "react";
import { connect } from "react-redux";
import CharityMini from "./CharityMini";
import * as actions from "../actions";

class DonorFeed extends React.Component {
  handleClick = event => {
    const id = parseInt(event.target.id, 10);
    const individualCharity = this.props.charityList.find(charity => {
      return charity.id === id;
    });
    this.props.individualCharityView(individualCharity);
  };

  render() {
    const { charities } = this.props;
    const alphabeticalCharities = charities.sort((char, char2) => {
      return char.name > char2.name;
    });

    const charity = alphabeticalCharities.map(charity => {
      return (
        <CharityMini
          handleClick={this.handleClick}
          name={charity.name}
          tagline={charity.tagline}
          icon={charity.icon}
          pledge={charity.pledge}
          key={charity.id}
          id={charity.id}
        />
      );
    });
    return <div>{charity}</div>;
  }
}

const mapStateToProps = state => ({
  charities: state.auth.user.supported,
  charityList: state.auth.charities_list
});

export default connect(mapStateToProps, actions)(DonorFeed);
