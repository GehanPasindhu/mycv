import React from "react";
import { Nav, NavbarContainer, NavIcon, Icon } from "./Navbar.elements";
import Logo from "../images/m.png";

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

