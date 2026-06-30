console.log("Authtication JWT and Middleware MVC database")
const express = require("express")

const app = express()

require("./config/db")

app.use(express.json())

const authRoutes = require("./routes/authRoutes")

app.use("/auth",authRoutes);

app.listen(5000,()=>{
    console.log(`server Runing http:localhost:5000`)
})
