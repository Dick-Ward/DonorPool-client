import React from "react";
import CharityUpdate from "./CharityUpdate";
import * as actions from "../actions";
import { connect } from "react-redux";

class CharityFeed extends React.Component {
  render() {
    const { updates } = this.props;
    const updateSort = updates.sort(function(a, b) {
      return Date(b.created_at) - Date(a.created_at);
    });

    const updateMap = updateSort.map(update => {
      return (
        <CharityUpdate
          key={update.id}
          id={update.id}
          name={update.charity_name}
          title={update.title}
          content={update.content}
          picture={update.picture}
        />
      );
    });

    return <div>{updateMap}</div>;
  }
}

const mapStateToProps = state => ({
  currentUserId: state.auth.user.id,
  updates: state.auth.relevant_updates
});

export default connect(mapStateToProps, actions)(CharityFeed);
