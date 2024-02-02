import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

class Cnavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">SyamWeb</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Linked In
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  WhatsApp
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Others
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Cnavbar;