const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({

    productName : {
        type : String,
        require: true
  },

  price :{
         type: String,
         require: true
   },

   manufacDate : {
          type: Number,
          require: true
   },

   description: {
    type: String,
    require: true
   },
   image :{
    type: String,
    required: true
},

})

const Favourites = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourites;
