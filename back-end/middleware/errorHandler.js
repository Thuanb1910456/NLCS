exports.errorHandler = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    //register
    if(err.code === 11000){
        err.statusCode = 400;
        for(let p in err.keyValue){
            err.message = `${p} is unique`
        }
    }
    //find id
    if(err.kind === "ObjectId"){
        err.statusCode = 404;
        err.message = `The ${req.originalUrl} không thể tìm thấy sản phẩm theo yêu cầu`;
    }
    //
    if(err.errors){
        err.statusCode = 400;
        err.message = []
        for(let p in err.errors){
            err.message.push(err.errors[p].properties.message);
        }
    }
    res.status(err.statusCode).json({
        status:'fail',
        message: err.message
    })
}