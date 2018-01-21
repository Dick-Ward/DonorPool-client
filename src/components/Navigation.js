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
  handleClick = () => {
    if (this.props.user.supported.length !== 0) {
      this.props.updatesView();
    } else {
      this.props.searchView();
      this.props.handleSearch("");
    }
  };

  handleLogout = () => {
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <Navbar light>
        <NavbarBrand onClick={this.handleClick} className="clickable">
          DonorPool
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          {!!this.props.user ? (
            <UncontrolledDropdown nav>
              <div> Welcome {this.props.user.first_name}!</div>
              <DropdownToggle nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>My Donations</DropdownItem>
                <DropdownItem>My Donation History</DropdownItem>
                <DropdownItem>My Preferences</DropdownItem>
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
  user: state.auth.user,
  searchQuery: state.search.searchQuery
});

export default withRouter(connect(mapStateToProps, actions)(Navigation));
