import React from "react";
import CharityFull from "../components/CharityFull";
import { connect } from "react-redux";

class CharityContainer extends React.Component {
  render() {
    console.log(this.props);
    return <CharityFull />;
  }
}
const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(CharityContainer);
