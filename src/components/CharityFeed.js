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
    this.props.individualCharityView(individualCharity);
  };

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
          handleClick={this.handleClick}
        />
      );
    });

    return <div>{updateMap}</div>;
  }
}

const mapStateToProps = state => ({
  currentUserId: state.auth.user.id,
  updates: state.auth.relevant_updates,
  charities: state.auth.charities_list
});

export default connect(mapStateToProps, actions)(CharityFeed);
