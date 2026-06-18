const chalk = require("chalk");

const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    console.log(req.url,req.method)
    res.write("Welcome to dashbord page");
    res.end()
})

console.log("hello shubham jadav")

// chalk for color msg


console.log(chalk.green("success fully msg"));
console.log(chalk.red("Error Msg"));

app.listen(3000,()=>{
    console.log(`server runing on : http://localhost:3000/`)
});