import React from "react";
import { Nav, NavbarContainer, NavIcon, Icon } from "./Navbar.elements";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavIcon to='/'>
            <Icon src={Logo} />
          </NavIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;

