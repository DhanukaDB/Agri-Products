import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";

export default function PaymentForm() {
  const publishableKey =
    "pk_test_51KuThEENtkzI6XdNsSPiEkfVuyT4ruaOGV2NyjLVT2In4pD2EhYFbry7bN3ELd4Er5MSgS4YUCZhnELb91Us1ZNZ008WPxrNJK";
  const [product, setProduct] = useState({ name: "HeadPhone", price: "10" });

  const priceForStripe = product.price * 100;

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:3000/create-checkout-session",
        method: "post",
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        console.log("Your payment was sucessful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Pay Now</h2>
      <p>
        <span>Product:</span>
        {product.name}
      </p>
      <p>
        <span>Price:</span>
        {product.price}
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        lable="Pay Now"
        name="Pay With Credit Card"
        amount={priceForStripe}
        description={`Total is : ${product.price}`}
        token={payNow}
      />
    </div>
  );
}
