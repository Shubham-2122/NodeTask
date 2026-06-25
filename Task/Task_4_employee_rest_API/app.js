console.log("Hello Employee Management")
const express = require("express")
const EmployeeRoutes = require("./routes/employeeRoutes")

const app = express()

// json data read karva
app.use(express.json())

app.use("/employees",EmployeeRoutes)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})
