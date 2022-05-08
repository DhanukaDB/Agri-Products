const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

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

})
//stripe router
const stripeRoute = require("./routes/stripe");
app.use("/api/checkout", stripeRoute);

//Customer router
const customerRouter = require("./routes/customers.js");
app.use("/customer", customerRouter);

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});
