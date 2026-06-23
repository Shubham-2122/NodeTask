const express = require("express")
const studentdata = require("./studentRegi")
const dashboardRoute = require("./middlware/dashboard");
const app = express();

// const logger = (req,res,next)=>{
//     console.log("Middleware Called");

//     console.log(req.method);
//     console.log(req.url)
//     next();
// }

// // middleware call
// app.use(logger);


// app.get("/",(req,res)=>{
//     res.send("Home page")
// })


//2. body parse middlware : post method mate use thay
//middleware use parse : json data covert kari ne use kari sake
app.use(express.json());

// app.use("/",studentdata);
// app.post("/users",(req,res)=>{
//     console.log("url : ",req.url,"method : ",req.method)

//     console.log("body :",req.body)

//     res.send("Data Received");
// })

// post men in body and raw data and json type check data reciverd or not


// Auth Middleware Example
// app.get("/",(req,res)=>{
//     res.send("Home");
// })
// app.use("/",dashboardRoute)


// 3.user validation

const validateUser = (req, res, next) => {

    const { name, email } = req.body;

    if(!name || !email) {

        return res.send("Please Fill All Fields");

    }

    next();

};

app.post("/register", validateUser, (req, res) => {

    res.send("User Registered");

});



app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})
