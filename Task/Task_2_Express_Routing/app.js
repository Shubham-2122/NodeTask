const express = require("express")

const app = express()
const StudentRoute  = require("./student")
const ProductRoutemulti = require("./products")
const productQuery = require("./searchQuery")

app.use("/",StudentRoute)
app.use("/",ProductRoutemulti)
app.use("/",productQuery)

app.listen(5000, () => {
    console.log("Server Running : http://localhost:5000");
});