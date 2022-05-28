require("dotenv").config();

//twilio
const express = require("express");
const router = express.Router();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);


//send sms
router.post('/', (req, res) => {
    const { amount, date } = req.body;

    client.messages
        .create({
            //get the details
            body: "Payment Successful", amount, date,
            //sms send number
            from: '(470) 536-4390 ',

            to: '0705312390'
        })
        .then(message => {
            console.log(message.status);
            res.send(message.status);
        })
        .done();
});



module.exports = router;