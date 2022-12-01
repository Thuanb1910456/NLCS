require('dotenv').config();
//connect DB
const { connectDB } = require('./configs/db');
const connection = connectDB();
//express - cors - bodyParser
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
//route
const AuthRoute = require("./routes/authRoute");
app.use('/api',AuthRoute);
const ProductsRoute = require("./routes/productsRoute");
app.use('/api/PetMart',ProductsRoute);
const ClassProduct = require("./routes/classProRoute");
app.use('/api/class',ClassProduct);
const Cart = require("./routes/cartRoute");
app.use('/api/cart',Cart);
const Bill = require("./routes/billRoute");
app.use('/api/bill',Bill);
//not found route
const {errorHandler} = require("./middleware/errorHandler");
app.all('*',(req,res,next)=>{
    const err = new Error('Router can not be found');
    err.statusCode = 404; 
    next(err);
});
app.use(errorHandler);
//port
const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})