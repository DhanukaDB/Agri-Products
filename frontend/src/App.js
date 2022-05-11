import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Payment from "./pages/payment/payment";
import CheckoutSucess from "./components/CheckoutSucess";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import DeliveryAddress from"./components/DeliveryAddress";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
