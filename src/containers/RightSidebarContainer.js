import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import FeaturedDonors from "../components/FeaturedDonors";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class RightSidebarContainer extends React.Component {
  render() {
    const { featuredUsers } = this.props;

    const featuredUsersMapped = shuffleArray(featuredUsers)
      .slice(0, 3)
      .map(user => {
        return (
          <FeaturedDonors
            firstName={user.first_name}
            lastName={user.last_name}
            supported={user.supported_charities}
            picture={user.picture}
            key={user.id}
            id={user.id}
          />
        );
      });

    return <div>{featuredUsersMapped}</div>;
  }

  componentDidMount() {
    this.props.fetchFeatured();
  }
}

const mapStateToProps = state => ({
  featuredUsers: state.featured.featuredUsers
});

export default connect(mapStateToProps, actions)(RightSidebarContainer);
