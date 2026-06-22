const express = require("express")

const router = express.Router()

router.get("/product/search",(req,res)=>{
    const name = req.query.name;
    const city = req.query.city;

    res.send("Product Name = " + name + " City = "+city);
})

module.exports = router

// http://localhost:5000/product/search?name=mobile&city=bharuch
// http://localhost:5000/product/search?name=mobile