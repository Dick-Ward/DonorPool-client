import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import FeaturedDonors from "../components/FeaturedDonors";

class RightSidebarContainer extends React.Component {
  handleClick = event => {
    const id = parseInt(event.target.id, 10);
    const individualCharity = this.props.charities.find(charity => {
      return charity.id === id;
    });
    this.props.individualCharityView(
      individualCharity,
      this.props.supported.length > 0
    );
  };
  render() {
    const { featuredUsers } = this.props;

    const featuredUsersMapped = featuredUsers.map(user => {
      return (
        <FeaturedDonors
          handleClick={this.handleClick}
          firstName={user.first_name}
          lastName={user.last_name}
          supported={user.supported}
          picture={user.picture}
          key={user.id}
          id={user.id}
        />
      );
    });

    return <div>{featuredUsersMapped}</div>;
  }
}

const mapStateToProps = state => ({
  featuredUsers: state.auth.featured,
  charities: state.auth.charities_list,
  supported: state.auth.user.supported
});

export default connect(mapStateToProps, actions)(RightSidebarContainer);
