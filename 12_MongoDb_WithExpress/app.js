// console.log("Hello shuhbham")
const express = require("express")

const app = express();

require("./config/db")

app.use(express.json())

const productRoutes = require("./Routes/productRoutes")

app.use("/products",productRoutes)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})
