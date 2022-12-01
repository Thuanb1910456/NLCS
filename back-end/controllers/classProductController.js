const Class = require("../models/classProducts");
// get all products
exports.findAllClassProducts = async(req,res,next)=>{
    try{
        const classP = await Class.find({});
        res.status(200).json({
            status:"success",
            results: classP.length,
            data: {classP}
        })
    } catch(error){
        res.json(error);
    }
}

// create one products
exports.createOneClassProducts = async(req,res,next)=>{
    try{
        const classP = await Class.create(req.body);
        res.status(200).json({
            status:"success",
            data: {classP}
        }) 
    }catch(error){
        next(error);
    }
}
