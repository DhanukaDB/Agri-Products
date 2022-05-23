import "./checkout.css";
import React from "react";
import Mail from "../Mail";

const CheckoutSucess = () => {
  return (
    <div className="container-checkout">
      <h3>Payment Successful!</h3>
      <img src="../success.png" alt="payment sucess" />
      <p>Hooray! You have completed your payment.</p>
      <Mail />
    </div>
  );
};

export default CheckoutSucess;
