const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection success!");
});

// stripe router
const stripeRoute = require("./routes/stripe");
app.use("/payment", stripeRoute);

//Customer router
const customerRouter = require("./routes/customers.js");
app.use("/customer", customerRouter);

//Delivery address router
const deliveryRouter = require("./routes/Delivery.js"); //import  delivery routes
app.use("/delivery", deliveryRouter); //create delivery routes

//Products Router
const productsRouter = require("./routes/product.js");
app.use("/products", productsRouter);

//Farmer Router
const farmerRouter = require("./routes/farmer.js");
app.use("/farmer", farmerRouter);

//Feedback router
const feedbackRouter =require("./routes/Feedback.js"); //import  feedback routes
app.use("/feedback",feedbackRouter); //create feedback routes

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});
