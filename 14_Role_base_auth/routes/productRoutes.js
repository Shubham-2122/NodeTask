const express = require("express")

const route = express.Router()

const {createProduct,getProducts} = require("../controllers/productControllers")

const verifyToken = require("../middleware/authMiddleware")

const adminMiddleware = require("../middleware/adminMiddleware")

// admin product create

console.log("verfityToken : ",verifyToken)
console.log("Admin : ",adminMiddleware)
console.log("product : ",createProduct)

route.post(
    "/",
    verifyToken,
    adminMiddleware,
    createProduct
)

route.get("/",getProducts)

module.exports = route