const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema =  new Schema({

    productName : {
        type : String,
        required: true
    },

    category : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        
    },
    description:{
        type:String,
        required: true
    },
    manufacDate :{
        type: String,
        required: true
    },
    image :{
        type: String,
        required: true
    },
    
     



})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;  