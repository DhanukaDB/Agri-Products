const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmerSchema = new Schema({

  username : {
        type : String,
        require: true
  },

   email :{
         type: String,
         unique: true,
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

   state: {
    type: String,
    require: true
   },

})

const Farmer = mongoose.model("Farmer", farmerSchema);

module.exports = Farmer;
