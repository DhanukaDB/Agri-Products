import React from "react";

function Payment() {
  return (
    <div>
      <div className="container">
        <h2>Review Your order</h2>
        <div className="container-address">
          <h5>Shipping Address</h5>
          <div>
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
        </div>
      </div>
      <div className="subtotal-container"></div>
    </div>
  );
}

export default Payment;
