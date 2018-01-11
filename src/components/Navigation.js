import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
