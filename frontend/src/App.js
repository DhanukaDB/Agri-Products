import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Payment from "./pages/payment/payment";
import CheckoutSucess from "./components/CheckoutSucess";
import NotFound from "./components/NotFound";
import DeliveryAddress from "./components/DeliveryAddress";
import "./App.css";
import ProductsAdd from "./pages/farmer/ProductsAdd";
import CartItems from "./components/CartItems";
import ProductsAll from "./pages/farmer/ProductsAll";
import FarmerSignup from "./pages/farmer/FarmerSignup";
import FarmerSignin from "./pages/farmer/FarmerSignin";
import Mail from "./components/Mail";
import MobilePayModal from "./components/MobilePay/MobilePay";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import DeliveryFeedback from "./components/DeliveryFeedback";
import ViewDelivery from "./components/ViewDelivery";
import FavouriteItems from "./pages/Favourites/FavouriteItems";


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
            <Route path="/addproducts" element={<ProductsAdd />}></Route>
            <Route path="/cartitems" element={<CartItems />} />
            <Route path="/addproducts" element={<ProductsAdd />}></Route>
            <Route path="/allproducts" element={<ProductsAll />}></Route>
            <Route path="/farmerSignup" element={<FarmerSignup />}></Route>
            <Route path="/farmerSignin" element={<FarmerSignin />}></Route>
            <Route path="/mail" element={<Mail />}></Route>
            <Route path="/mobilebillpay" element={<MobilePayModal />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/feedback" element={<DeliveryFeedback />}></Route>
            <Route path="/viewdelivery" element={<ViewDelivery />}></Route>
            <Route path="/favouriteitems" element={<FavouriteItems/>}/>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
