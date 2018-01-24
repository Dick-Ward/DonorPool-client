import React from "react";
import CharityUpdate from "./CharityUpdate";
import * as actions from "../actions";
import { connect } from "react-redux";

class CharityFeed extends React.Component {
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
    const { updates } = this.props;
    const updateSort = updates.sort(function(a, b) {
      return a.created_at < b.created_at;
    });

    const updateMap = updateSort.map(update => {
      return (
        <CharityUpdate
          key={update.id}
          id={update.id}
          charityId={update.charity_id}
          name={update.charity_name}
          title={update.title}
          content={update.content}
          picture={update.picture}
          handleClick={this.handleClick}
        />
      );
    });

    return <div>{updateMap}</div>;
  }
}

const mapStateToProps = state => ({
  state: state,
  currentUserId: state.auth.user.id,
  updates: state.auth.relevant_updates,
  charities: state.auth.charities_list,
  supported: state.auth.user.supported
});

export default connect(mapStateToProps, actions)(CharityFeed);
