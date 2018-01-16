import React from "react";
import CharityUpdate from "./CharityUpdate";
import * as actions from "../actions";
import { connect } from "react-redux";

class CharityFeed extends React.Component {
  render() {
    console.log(this.props.state);
    return (
      <div>
        <CharityUpdate />
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchRelevantUpdates(this.props.currentUserId);
  }
}

const mapStateToProps = state => ({
  currentUserId: state.auth.currentUser.id,
  state: state
});

export default connect(mapStateToProps, actions)(CharityFeed);
