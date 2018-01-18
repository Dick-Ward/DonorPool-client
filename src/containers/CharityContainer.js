import React from "react";
import CharityFull from "../components/CharityFull";
import { connect } from "react-redux";

class CharityContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.supported.length > 1 ? (
          <button onClick={this.props.resetSearch}>Back</button>
        ) : null}
        <CharityFull />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  supported: state.auth.user.supported
});

export default connect(mapStateToProps)(CharityContainer);
