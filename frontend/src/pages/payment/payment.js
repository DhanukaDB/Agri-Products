import React from "react";
import "./payment.css";
import { Button } from "react-bootstrap";

function Payment() {
  return (
    <div className="main">
      <div className="container-review">
        <h2>Review Your order</h2>
        <div className="container-address">
          <h5>Shipping Address</h5>
          <div className="address-details">
            <p>Full Nmame:</p>
            <p>Flat:</p>
            <p>Area:</p>
            <p>Land mark:</p>
            <p>City and address</p>
            <p>Phone:</p>
          </div>
        </div>
        <div className="payment-container">
          <h5>Payment Method</h5>
          <Button className="pay-button" variant="outline-dark">
            Pay Via Credit Card
          </Button>
          <Button className="pay-button" variant="dark">
            Pay Via Mobile Phone
          </Button>
        </div>
        <div className="order">
          <h5>Your order</h5>
        </div>
      </div>
      <div className="subtotal-container"></div>
    </div>
  );
}

export default Payment;
