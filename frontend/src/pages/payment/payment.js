import React from 'react';
import "./payment.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvide";
import styled from "styled-components";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { getCartTotal } from "../../reducer";
import Checkout from "../../components/Payment/Checkout";

function Payment() {
  const [{ address, cart }] = useStateValue();
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

          <Checkout />

          <Button className="pay-button btn-sm" variant="dark">
            Pay Via Mobile Phone
          </Button>
        </div>
        <div className="order">
          <h5>Your order</h5>
          <div>
            {cart?.map((product) => (
              <Product>
                <Image>
                  <img src={product.image} alt="" />
                </Image>
                <Description>
                  <h4>{product.title}</h4>
                  <p>{product.price}</p>
                </Description>
              </Product>
            ))}
          </div>
        </div>
      </div>
      <Subtotal>
        <div>
          <p>
            SubTotal ({cart.length} products ) :
            <strong> Rs. {getCartTotal(cart)}.00</strong>
          </p>
          <small>
            <span>Click here to pay...</span>
          </small>
        </div>
        <button
          onClick={() => {
            navigate("/delivery");
          }}
        >
          Place Order <CreditCardIcon />
        </button>
      </Subtotal>
    </div>
  );
}
const Product = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.3;
  img {
    width: 90%;
  }
`;
const Description = styled.div`
  flex: 0.7;
  h4 {
    font-weight: 500;
    font-size: 50px;
  }
  p {
    font-weight: 900;
    margin-top: 10px;
    font-size: 20px;
  }
  .remove {
    background-color: #ff0000;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;

    &hover {
      text-decoration: underline;
    }
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }

  p {
    font-size: 20px;
  }
  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }
  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #32cd32;
    border: none;
    outline: none;

    border-radius: 8px;
  }
`;
export default Payment;
