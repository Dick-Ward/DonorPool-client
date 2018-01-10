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
      <NavbarBrand href="/">DonorPool</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav>
          <DropdownToggle nav caret>
            My Account
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Sign Out</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
