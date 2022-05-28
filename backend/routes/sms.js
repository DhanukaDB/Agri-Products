require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({ body: 'Payment sucessful', from: '+15017122661', to: '+94705312390' })
    .then(message => console.log(message.sid));