import React from "react";

import {Container, Navbar,Nav,NavDropdown} from "react-bootstrap";


function Header(){

    return(

<div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Sani Agro 🍂</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Sign In</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sign Up
      </Nav.Link>
    </Nav>
    <Nav.Link eventKey={3} href="#memes">
    <img  src="https://res.cloudinary.com/hidl3r/image/upload/v1651918382/AgriManagement/icons8-shopping-cart-24_strvwd.png" alt="product"
          />
            </Nav.Link> 

  </Navbar.Collapse>
  </Container>
</Navbar>
 </div>

    )

}

export default Header; 