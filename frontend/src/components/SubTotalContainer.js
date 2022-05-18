import React from "react";
import { getCartTotal } from "../reducer";
import { useStateValue } from "../StateProvide";
import styled from "styled-components";

const SubTotalContainer = () => {
  const [{ cart }] = useStateValue();
  return (
    <div>
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
      </Subtotal>
    </div>
  );
};
const Subtotal = styled.div`
  flex: 3;
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
`;

export default SubTotalContainer;
