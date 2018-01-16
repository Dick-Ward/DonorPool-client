import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import FeaturedDonors from "../components/FeaturedDonors";

class RightSidebarContainer extends React.Component {
  render() {
    const { featuredUsers } = this.props;

    const featuredUsersMapped = featuredUsers.map(user => {
      return (
        <FeaturedDonors
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
  featuredUsers: state.auth.featured
});

export default connect(mapStateToProps, actions)(RightSidebarContainer);
