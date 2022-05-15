const router = require("express").Router();
const stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/add", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "sucess";
  } catch (error) {
    console.log(error);
    status = "Failure";
  }
  res.json({ error, status });
});

module.exports = router;
