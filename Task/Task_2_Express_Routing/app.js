const express = require("express")

const app = express()
const StudentRoute  = require("./student")

app.use("/",StudentRoute)

app.listen(5000, () => {
    console.log("Server Running : http://localhost:5000");
});