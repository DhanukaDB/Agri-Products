import "./checkout.css";
import React from "react";
import Mail from "../Mail";
import { Button } from 'react-bootstrap';
import axios from "axios";

const CheckoutSucess = () => {
  //SMS
  function sendSMS() {
    return axios.post("http://localhost:5000/sms").then((res) => {
      alert("Confirmation sms sucessfully sended.")
    }).catch((error) => {
      alert("error with sending SMS");
    })
  }

  return (
    <div className="container-checkout">
      <h3>Payment Successful!</h3>
      <img src="../success.png" alt="payment sucess" />
      <p>Hooray! You have completed your payment.</p>
      <Mail />
      <Button onCick={sendSMS} className="primary">Send SMS</Button>
    </div>
  );
};

export default CheckoutSucess;
