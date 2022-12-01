const Products = require("../models/products");
// get all products
exports.findAllProducts = async(req,res,next)=>{
    try{
        const products = await Products.find({})
            .populate('class','-_id');
        res.status(200).json({
            status:"success",
            results: products.length,
            data: {products}
        })
    } catch(error){
        res.json(error);
    }
}
exports.findOneProducts = async(req,res,next)=>{
    try{
        const products = await Products.findById(req.params.id)
            .populate('class')
        res.status(200).json({
            status:"success",
            data: {products}
        })
    } catch(error){
        next(error);
    }
}

// create one products
exports.createOneProducts = async(req,res,next)=>{
    try{
        const products = await Products.create(req.body);
        res.status(200).json({
            status:"success",
            data: {products}
        }) 
    }catch(error){
        next(error);
    }
}
// update products
exports.updateOneProducts = async(req,res,next)=>{
    try{
        const products = await Products.findByIdAndUpdate(req.params.id, {...req.body}, {new: true});
        res.status(200).json({
            status:"success",
            data: {products}
        }) 
    }catch(error){
        next(error);
    }
}
// detele products
exports.deleteOneProducts = async(req,res,next)=>{
    try{
        const products = await Products.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"success",
            // data: {products}
        }) 
    }catch(error){
        next(error);
    }
}
//update quanlity