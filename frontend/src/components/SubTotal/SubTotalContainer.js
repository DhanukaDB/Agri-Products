import React from "react";
import { getCartTotal } from "../../reducer";
import { useStateValue } from "../../StateProvide";
import "./subTotal.css";

const SubTotalContainer = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className="Subtotal">
          <p className="p">
            SubTotal ({cart.length} products ) :
            <strong> Rs. {getCartTotal(cart)}.00</strong>
          </p>
          <small className="small">
            <span className="span">Click here to pay...</span>
          </small>
        </div>
  );
};


export default SubTotalContainer;
