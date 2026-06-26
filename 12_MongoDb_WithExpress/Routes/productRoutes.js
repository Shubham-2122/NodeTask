const express = require("express")

const router = express.Router()
const {getProductbyId,getProducts,updateproduct,deleteProduct,createproduct} = require("../controllers/productControllers")


// add product
router.post("/",createproduct)

// get all product
router.get("/",getProducts)

// single product
router.get("/:id",getProductbyId)

// update product
router.put("/:id",updateproduct)

// delete product
router.delete("/:id",deleteProduct)


module.exports = router;

