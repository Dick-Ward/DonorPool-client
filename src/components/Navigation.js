import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Navigation extends React.Component {
  handleLogout = () => {
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <Navbar light>
        <NavbarBrand>DonorPool</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {this.props.loggedIn ? (
            <UncontrolledDropdown nav>
              <div> welcome {this.props.username}</div>
              <DropdownToggle nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Adjust Donations</DropdownItem>
                <DropdownItem>Donation History</DropdownItem>
                <DropdownItem>User Preferences</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.handleLogout}>
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <div> You gotta log in!</div>
          )}
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  loggedIn: !!state.user.username
});

export default withRouter(connect(mapStateToProps, actions)(Navigation));
