const express = require("express")
const { getProducts, getSingleProduct } = require("../controller/productController")
const router = express.Router()

router.route("/products").get(getProducts)
router.route("/product/:id").get(getSingleProduct)

// export router
module.exports = router