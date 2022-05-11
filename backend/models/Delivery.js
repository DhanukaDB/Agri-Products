const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({

  fullname : {
        type : String,
        require: true
  },

   phoneno :{
         type: Number,
         require: true
   },

   
   buildingNo : {
          type: String,
          require: true
   },

    street : {
      type: String,
      require: true
},
   
   city: {
      type: String,
      require: true
     },

    province: {
      type: String,
      require: true
     },

     Date: {
           type:Date,
     }

})

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
