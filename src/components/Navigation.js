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
    console.log(this.props.loggedIn);
    return (
      <div>
        {this.props.loggedIn ? (
          <Navbar light>
            <NavbarBrand>DonorPool</NavbarBrand>
            <Nav className="ml-auto" navbar>
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
            </Nav>
          </Navbar>
        ) : (
          <div> log the fuck in </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(Navigation);
