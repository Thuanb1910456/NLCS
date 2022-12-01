const express = require('express');
const Products = require('../controllers/productsController');
const Router = express.Router();
Router.route('/')
    .get(Products.findAllProducts)
    .post(Products.createOneProducts);
Router.route('/:id')
    .put(Products.updateOneProducts)
    .delete(Products.deleteOneProducts)
    .get(Products.findOneProducts);
module.exports = Router;