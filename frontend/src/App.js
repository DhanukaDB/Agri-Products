import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Payment from "./pages/payment/payment";
import CheckoutSucess from "./components/CheckoutSucess";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import DeliveryAddress from"./components/DeliveryAddress";
import ProductsAdd from "./pages/ProductsAdd";
import ProductsAll from "./pages/ProductsAll";
import FarmerSignup from "./pages/FarmerSignup";
import FarmerSignin from "./pages/FarmerSignin";
import './App.css';

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
