import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Payment from "./pages/payment/payment";
import CheckoutSucess from "./components/CheckoutSucess";
import NotFound from "./components/NotFound";
import DeliveryAddress from "./components/DeliveryAddress";
import "./App.css";
import PaymentForm from "./components/PaymentForm";
import ProductsAdd from "./pages/ProductsAdd";

import CartItems from './components/CartItems';
import FavouriteItems from "./pages/Favourites/FavouriteItems";

import ProductsAll from "./pages/ProductsAll";
import FarmerSignup from "./pages/FarmerSignup";
import FarmerSignin from "./pages/FarmerSignin";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/delivery" element={<DeliveryAddress />}></Route>
            <Route
              path="/checkout-success"
              element={<CheckoutSucess />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>

            <Route path="/addproducts" element={<ProductsAdd/>}></Route>
            <Route path="/cartitems" element={<CartItems/>}/>
            <Route path="/favouriteitems" element={<FavouriteItems/>}/>

            <Route
              path="/api/create-checkout-session"
              element={<PaymentForm />}
            ></Route>
           
            <Route path="/allproducts" element={<ProductsAll />}></Route>
            <Route path="/farmerSignup" element={<FarmerSignup />}></Route>
            <Route path="/farmerSignin" element={<FarmerSignin />}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
