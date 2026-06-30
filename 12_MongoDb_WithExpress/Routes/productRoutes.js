const express = require("express")

const router = express.Router()
const {getProductbyId,getProducts,updateproduct,deleteProduct,createproduct,categoryFind} = require("../controllers/productControllers")


// add product
router.post("/",createproduct)

// get all product
router.get("/",getProducts)

// category find 
router.get("/search",categoryFind)

// single product
router.get("/:id",getProductbyId)

// update product
router.put("/:id",updateproduct)

// delete product
router.delete("/:id",deleteProduct)


module.exports = router;

