import React from "react";
import "./payment.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvide";
import styled from "styled-components";
import Checkout from "../../components/Payment/Checkout";
import SubTotalContainer from "../../components/SubTotal/SubTotalContainer";
import { Button } from "react-bootstrap";

function Payment() {
  const [{ address, cart }] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="container-review">
        <h2>Review Your order</h2>
        <div className="container-address">
          <div className="container" id="subtotal">
            <SubTotalContainer />
          </div>
          <div className="address-details">
            <h5 className="header-order">Shipping Address</h5>
            <p>{address.fullname}</p>
            <p>{address.phoneno}</p>
            <p>{address.buildingNo}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.province}</p>
          </div>
        </div>
        <div className="order">
          <div className="payment-container">
            <Checkout />
            <Button
              className="me-4 btn-primary" id="btn-pay"
              onClick={() => {
                navigate("/mobilebillpay");
              }}
            >
              Pay Via Mobile Bill
            </Button>
          </div>
          <br />
          <h5 className="header-order">Your order</h5>
          <div>
            {cart?.map((product) => (
              <Product>
                <Image>
                  <img src={product.image} alt="" />
                </Image>
                <Description>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </Description>
              </Product>
            ))}
          </div>
        </div>
      </div>
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
    margin: 2%;
    border-radius: 4px;
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
export default Payment;
