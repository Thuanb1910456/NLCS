const Bill = require("../models/bill");
//get cart
exports.getBill = async (req, res, next) => {
    try {
        const bill = await Bill.find(req.body)
            .populate({
                path: 'products',
                populate: { path: 'id_product' }
            })
            .populate('id_user')
        res.status(200).json({
            status: "success",
            data: bill
        })
    } catch (error) {
        next(error);
    }
}
//get bill of user 
exports.getBillOfUser = async (req, res, next) => {
    try {
        const bill = await Bill.find({
            id_user: req.query.user
        })
            .populate('id_user')
            .populate({
                path: 'products',
                populate: { path: 'id_product' }
            })
        res.status(200).json({
            status: "success",
            data: bill
        })
    } catch (error) {
        next(error);
    }
}
// create one products
exports.createBill = async (req, res, next) => {
    try {
        const bill = await Bill.create(req.body);
        res.status(200).json({
            status: "success",
            data: { bill }
        })
    } catch (error) {
        next(error);
    }
}
// update products
exports.updateBill = async (req, res, next) => {
    console.log(req.body)
    try {
        const bill = await Bill.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        res.status(200).json({
            status: "success",
            data: { bill }
        })
        console.log(bill)
    } catch (error) {
        next(error);
    }
}
// detele products
exports.deleteBill = async (req, res, next) => {
    try {
        const bill = await Bill.findByIdAndRemove(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            data: { bill }
        })
    } catch (error) {
        next(error);
    }
}