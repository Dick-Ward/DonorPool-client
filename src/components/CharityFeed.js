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
          title={update.title}
          content={update.content}
          picture={update.picture}
        />
      );
    });

    return <div>{updateMap}</div>;
  }
  componentDidMount() {
    this.props.fetchRelevantUpdates(this.props.currentUserId);
  }
}

const mapStateToProps = state => ({
  currentUserId: state.auth.currentUser.id,
  updates: state.updates.updates
});

export default connect(mapStateToProps, actions)(CharityFeed);
