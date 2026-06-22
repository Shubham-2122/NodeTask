const express = require("express")

const router = express.Router()

router.get("/product/:id/:name",(req,res)=>{
    const id = req.params.id;
    const name = req.params.name
    
    res.send("product Name "+name," Product Id :",id)
})

module.exports = router;

// http://localhost:5000/product/101/shubham
