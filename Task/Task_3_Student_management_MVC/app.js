const express = require("express")

const app = express()

const studentRoutes = require("./routes/studentRoutes")
const productRoutes = require("./routes/productRoutes")

app.use("/",studentRoutes);
app.use("/products",productRoutes)

app.listen(5000,()=>{
    console.log(`Server Runing : http://localhost:5000`)
})
