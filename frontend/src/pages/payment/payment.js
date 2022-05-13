import React from "react";
import "./payment.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvide";

function Payment() {
  const [{ address }] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="container-review">
        <h2>Review Your order</h2>
        <div className="container-address">
          <h5>Shipping Address</h5>
          <div className="address-details">
            <p>{address.fullname}</p>
            <p>{address.phoneno}</p>
            <p>{address.buildingNo}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.province}</p>
          </div>
        </div>
        <div className="payment-container">
          <h5>Payment Method</h5>
          <Button
            onClick={() => {
              navigate("/api/create-checkout-session");
            }}
            className="pay-button"
            variant="outline-dark"
          >
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
