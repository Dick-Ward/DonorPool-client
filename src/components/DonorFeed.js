import React from "react";
import { connect } from "react-redux";
import CharityMini from "./CharityMini";

class DonorFeed extends React.Component {
  render() {
    const { charities } = this.props;

    const charity = charities.map(charity => {
      return (
        <CharityMini
          name={charity.name}
          tagline={charity.tagline}
          icon={charity.icon}
          key={charity.id}
        />
      );
    });
    return <div>{charity}</div>;
  }
}

const mapStateToProps = state => ({
  state: state,
  charities: state.auth.user.supported
});

export default connect(mapStateToProps)(DonorFeed);
