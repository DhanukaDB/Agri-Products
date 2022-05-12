import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductsAdd from "./pages/ProductsAdd";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addproducts" element={<ProductsAdd/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
