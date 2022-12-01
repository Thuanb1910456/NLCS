const express = require('express');
const Class = require('../controllers/classProductController');
const Router = express.Router();
Router.route('/')
    .get(Class.findAllClassProducts)
    .post(Class.createOneClassProducts);
module.exports = Router;