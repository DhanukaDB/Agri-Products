const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const stripeRoute = require("./routes/stripe");

app.use(cors());

app.use("/api/checkout", stripeRoute);

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});
