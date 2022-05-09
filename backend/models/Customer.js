const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({

  username : {
        type : String,
        require: true
  },

   email :{
         type: String,
         require: true
   },

   phoneno : {
          type: Number,
          require: true
   },

   password: {
    type: String,
    require: true
   },

})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
