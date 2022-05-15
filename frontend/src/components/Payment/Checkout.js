import React from "react";
import { Button } from "react-bootstrap";
import StriprCheckout from "react-stripe-checkout";
import { useStateValue } from "../../StateProvide";
import { getCartTotal } from "../../reducer";
import axios from "axios";

const Checkout = (subTotal) => {
  const publishableKey =
    "pk_test_51KuThEENtkzI6XdNsSPiEkfVuyT4ruaOGV2NyjLVT2In4pD2EhYFbry7bN3ELd4Er5MSgS4YUCZhnELb91Us1ZNZ008WPxrNJK";
  const [{ cart }] = useStateValue();

  const tokenHandler = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:5000/payment/add",
        method: "post",
        data: {
          amount: priceForStripe,
          token,
        },
      });
      if (response === 200) {
        console.log(`Your Payment was sucessful`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const priceForStripe = getCartTotal(cart);

  return (
    <StriprCheckout
      stripeKey={publishableKey}
      label="Pay Now"
      name="Pay with credit card"
      shippingAddress
      billingAddress
      amount={priceForStripe}
      description={`Total is $${priceForStripe}`}
      token={tokenHandler}
    >
      <Button>Pay Via Credit Card</Button>
    </StriprCheckout>
  );
};

export default Checkout;
