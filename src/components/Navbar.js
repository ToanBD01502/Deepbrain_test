import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand href="#home" className="ms-3">
        <img
          src="/logo.svg"
          width="190"
          height="40"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto ms-5">
          <NavDropdown title="Features" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Feature 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Feature 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Feature 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Use Cases" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.4">Use Case 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Use Case 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Use Case 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Resources" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.7">Resource 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.8">Resource 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.9">Resource 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Company" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.10">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.11">Team</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.12">Careers</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="me-3">
          <Nav.Link href="#login" className="me-3">Login</Nav.Link>
          <Nav.Link href="#contact-sales" className="me-3 btncontact" style={{ color: '#1155B6' }}>Contact Sales</Nav.Link>
          <Button variant="primary" href="#get-started">Get Started</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
