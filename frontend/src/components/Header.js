import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvide";
import styled from "styled-components";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";


function Header() {
  const [{ cart }] = useStateValue();
  const [{ favourite }] = useStateValue();
  const navigate = useNavigate();

  return (

    <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Sani Agro 🍂</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
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