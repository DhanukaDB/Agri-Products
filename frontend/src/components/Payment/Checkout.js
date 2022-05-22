import React from "react";
import { Button } from "react-bootstrap";
import StriprCheckout from "react-stripe-checkout";
import { useStateValue } from "../../StateProvide";
import { getCartTotal } from "../../reducer";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Checkout = (subTotal) => {
  const navigate = useNavigate();
  //emailjs
  //if payment sucessfull fire this
  const paymentSucess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was sucessful!",
      time: 4000,
    });
    navigate("/checkout-success");
  };

  //if payment fail fire this
  const paymentFail = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not sucessful!",
      time: 4000,
    });
  };
  //stripe
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
      if (response.status === 200) {
        paymentSucess();
        console.log(`Your Payment was sucessful`);
      }
    } catch (error) {
      paymentFail();
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
      <Button className="me-4" btn-primary>
        Pay Via Credit Card
      </Button>
    </StriprCheckout>
  );
};

export default Checkout;
