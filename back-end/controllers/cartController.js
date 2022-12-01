const Cart = require("../models/cart");
//get cart
exports.getAllCart = async (req, res, next) => {
    try {
        const cart = await Cart.find({})
            .populate('id_user')
            .populate({
                path: 'products',
                populate: { path: 'id_product' }
            })
        res.status(200).json({
            results: cart.length,
            status: "success",
            data: { cart }
        })
    } catch (error) {
        next(error);
    }
}
//get one cart
exports.getCartOfUser = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({
            id_user: req.query.user
        })
            .populate({
                path: 'products',
                populate: { path: 'id_product' }
            })
        res.status(200).json({
            status: "success",
            data: cart
        })
    } catch (error) {
        next(error);
    }
}
// create one cart
exports.createCart = async (req, res, next) => {
    try {
        const cart = await Cart.create(req.body);
        res.status(200).json({
            status: "success",
            data: { cart }
        })
    } catch (error) {
        next(error);
    }
}
// update cart
exports.updateCart = async (req, res, next) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        res.status(200).json({
            status: "success",
            data: { cart }
        })
    } catch (error) {
        next(error);
    }
}
exports.quantity = async (req, res, next) => {
    try {
        // console.log(req.body.products);
        // console.log(req.params.idCart);
        // console.log(req.params.idProduct);
        const cart = await Cart.findOneAndUpdate(
            {
            _id: req.params.idCart,
            products: { $elemMatch:{_id: req.params.idProduct}}
            },
            {
                $set: {
                    'products.$.quantity': req.body.products
                }
            },
            // {'new': true, 'safe': true, 'upsert': true}
        );
        // console.log(123);
        // console.log(cart);
        res.status(200).json({
            status: "success",
            data: { cart }
        })
    } catch (error) {
        next(error);
    }
}
// detele cart
exports.deleteCart = async (req, res, next) => {
    try {
        const cart = await Cart.findByIdAndRemove(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            data: { cart }
        })
    } catch (error) {
        next(error);
    }
}