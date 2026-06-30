const express = require("express")

const route = express.Router()

//logic token create and regiter
const {register,login} = require("../controllers/authControllers")

const verifyToken = require("../middleware/authMiddleware");

// register 
route.post("/register",register);

// login
route.post("/login",login)

route.get("/dashboard",verifyToken,(req,res)=>{
    res.json({
        message: "Protected Data",
        user:req.user
    })
})

module.exports = route;

