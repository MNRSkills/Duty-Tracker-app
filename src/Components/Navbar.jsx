import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDrowpdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/esm/Container";

const NavbarComp = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Brand Logo</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
