const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    pname : String,
    qty : Number,
    price : Number,
    status:{
        type:String,
        enum :["active","inactive"],
        default:"active"
    }
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
