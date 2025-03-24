const orderModel = require("../models/orderModel")

// create order -- http://localhost:6300/api/mgrk/order
exports.createOrder = async(req,res,next)=>{
    const cartItems = req.body
    const totalAmount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0) ).toFixed(2)
    const status = "pending";
    
    const order = await orderModel.create({cartItems, totalAmount, status})
    res.json({success:true, msg: "Orders working", order})
} 