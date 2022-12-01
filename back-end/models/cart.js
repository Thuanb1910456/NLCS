const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    products: [{
        id_product: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'products'
        },
        quantity: Number,
    }],
    id_user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'users'
    }
}, { timestamps: true })

const Cart = mongoose.model('carts',cartSchema);
module.exports = Cart;