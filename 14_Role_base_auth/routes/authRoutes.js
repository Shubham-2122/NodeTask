const express = require("express")

const route = express.Router()

const {register,login} = require("../controllers/authControllers");

const verifyToken = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");


route.post("/register",register)

// login

route.post("/login",login)

// user profile
route.get(
    "/profile",
    verifyToken,
    (req,res)=>{
        res.json({
            user: req.user
        })
    }
)

// admin router

route.get(
    "/admin-dashboard",
    verifyToken,
    adminMiddleware,
    (req,res)=>{
        res.json({
            message: "Welcome Admin"
        })
    }
)

module.exports = route;