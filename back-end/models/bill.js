const mongoose = require('mongoose');
const billSchema = new mongoose.Schema({
    id_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    products: [{
        id_product: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'products'
        },
        quantity: Number,
    }],
    status:{type:Boolean},
    content:{type:Boolean},
    total:{type:Number,trim:true},
}, { timestamps: true })

const Bill = mongoose.model('Bill',billSchema);
module.exports = Bill;