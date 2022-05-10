import React from "react";

const Checkout = () => {
  return (
    <div>
      <html>
        <head>
          <title>Buy cool new product</title>
        </head>
        <body>
          <form action="/create-checkout-session" method="POST">
            <button className="btn btn-primary" type="submit">
              Pay Now
            </button>
          </form>
        </body>
      </html>
    </div>
  );
};

export default Checkout;
