const express= require("express")

const route = express.Router()

const {createOrder,getOrders} = require("../controllers/orderControllers") 

const verifyToken = require("../middleware/authMiddleware")

// create Order 
route.post(
    "/",
    verifyToken,
    createOrder
)

// get
route.get(
    "/",
    verifyToken,
    getOrders
)

module.exports = route