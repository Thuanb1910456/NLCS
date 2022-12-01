const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {type: String, trim: true,},
    price:{type:Number,},
    image:{type:String, trim: true},
    describe:{type:String,trim:true},
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'classproducts'
    }
}, { timestamps: true })

const Products = mongoose.model('products',productsSchema);
module.exports = Products;