import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDrowpdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

const NavbarComp = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Brand Logo</Navbar.Brand>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
