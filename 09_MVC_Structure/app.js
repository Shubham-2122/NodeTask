const express = require("express")

const app = express();

const userRoutes = require("./routes/userRoutes")

app.use("/users",userRoutes);

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})
