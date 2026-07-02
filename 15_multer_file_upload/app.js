console.log("Hello shubham")
const express = require("express")

const app = express()
const uploadRoute = require("./routes/uploadRoute")
const productRoutes = require("./routes/productRoutes")
const errorHandler = require("./middleware/errorHandler");

app.use(express.json())

app.use("/api",uploadRoute)
app.use("/api",productRoutes)

app.use("/uploads",express.static("uploads"))
app.use(errorHandler);

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})

