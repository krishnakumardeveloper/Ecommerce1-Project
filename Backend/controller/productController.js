const productModel = require("../models/productModel")


// Get Product api - http://localhost:6300/api/mgrk/products
exports.getProducts = async(req, res, next)=>{
  const query = req.query.keyword? {name : {
    $regex: req.query.keyword,
    $options: 'i'
  }} : {}
  
    const products = await productModel.find(query)
    res.json({success: true, msg: "Get products working", products})
}

// Get One Product api - http://localhost:6300/api/mgrk/product/:id
exports.getSingleProduct = async(req, res, next)=>{
    // console.log(req.params.id, "id");
  try{
    const Targetproduct =  await productModel.findById(req.params.id)
    res.json({success: true, msg: "Get Single product working", Targetproduct})
  }catch(err){
    res.json({success: false, msg: "Unavailable id with product " + err.message})
  }
}