import React from "react";
import { getCartTotal } from "../../reducer";
import { useStateValue } from "../../StateProvide";
import "./subTotal.css";
import { Card } from 'react-bootstrap';

const SubTotalContainer = () => {
  const [{ cart }] = useStateValue();

  return (
    <Card border="success" style={{ width: '18rem' }}>
      <Card.Header>SubTotal </Card.Header>
      <Card.Body>
        <Card.Title>({cart.length} products ) :</Card.Title>
        <Card.Text>
          Rs. {getCartTotal(cart)}.00
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


export default SubTotalContainer;
