const express = require('express');
const Cart = require('../controllers/cartController');
const Router = express.Router();
Router.route('/')
    .get(Cart.getAllCart)
    .post(Cart.createCart)
Router.route('/:id')
    .put(Cart.updateCart)
    .delete(Cart.deleteCart)
Router.route('/user')
    .get(Cart.getCartOfUser)

Router.route('/:idCart/:idProduct')
    .put(Cart.quantity)


module.exports = Router;