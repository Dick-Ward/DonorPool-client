import React from "react";
import { connect } from "react-redux";

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
  render() {
    return (
      <Navbar light>
        <NavbarBrand>DonorPool</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {this.props.loggedIn ? (
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Adjust Donations</DropdownItem>
                <DropdownItem>Donation History</DropdownItem>
                <DropdownItem>User Preferences</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : null}
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(Navigation);
