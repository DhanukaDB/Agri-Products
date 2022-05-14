import React from "react";
import {useNavigate} from "react-router-dom";
import { useStateValue } from "../StateProvide";
import styled from "styled-components";

import {Container, Navbar,Nav,NavDropdown} from "react-bootstrap";


function Header(){
  const [{favourite}]=useStateValue();
  const [{cart}]=useStateValue();
  const navigate = useNavigate();

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
    <HeartButton onClick={() => navigate("/favouriteitems")}>
            <img src="./heart.png" alt="" />
            <p>{favourite?.length}</p> 
          </HeartButton>
    <CartButton onClick={() => navigate("/cartitems")}>
            <img src="./cart.png" alt="" />
            <p>{cart?.length}</p>
          </CartButton>

  </Navbar.Collapse>
  </Container>
</Navbar>
 </div>

    )

}


const CartButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
    background-color:white;
  }
  p {
    color: #fff;
    font-weight: 500;
  }
`;

const HeartButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
  
  }
  p {
    color: red;
    font-weight: 500;
  }
`;
export default Header; 