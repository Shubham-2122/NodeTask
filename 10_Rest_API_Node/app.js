// console.log("hello")
const express = require("express")

const app = express()

// middleware from post method use api send to object show
app.use(express.json())

const studentRoutes = require("./router/studentRoutes")

app.use("/",studentRoutes);

app.listen(5000,()=>{
    console.log(`Server Runing : http://localhost:5000`)
})