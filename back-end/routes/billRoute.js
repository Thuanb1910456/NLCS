const express = require('express');
const Bill = require('../controllers/billController');
const Router = express.Router();
Router.route('/')
    .get(Bill.getBill)
    .post(Bill.createBill)
Router.route('/:id')
    .put(Bill.updateBill)
    .delete(Bill.deleteBill)
Router.route('/user')
    .get(Bill.getBillOfUser)
// Router.route('/:id/:idProduct')
//     .put(Cart.deleteBill)
module.exports = Router;