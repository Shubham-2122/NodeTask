const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ecommerce")

.then(()=>console.log("MongoDB conncted.."))

.catch((err)=>console.log(err))
