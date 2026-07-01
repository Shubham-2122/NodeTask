// console.log("hello")
const express = require("express")

const dotenv = require("dotenv")

dotenv.config();

const app = express();

// database connect msg
require("./config/db");

app.use(express.json())
const authRoutes = require("./routes/authRoutes")
const productRoutes =  require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")

// app route
app.use("/auth",authRoutes);
app.use("/products",productRoutes)
app.use("/orders",orderRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server runig : http://localhost:5000`)
})