import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
