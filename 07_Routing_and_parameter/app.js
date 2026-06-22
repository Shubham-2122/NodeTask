// console.log("hellio Routing and parameter")

const express = require("express")

const app = express()

// single routes paramter
// app.get("/student/:id",(req,res)=>{
//     const id = req.params.id;

//     res.send("student id = "+id);
// })

// multiple routes parameter
// app.get("/student/:id/:name",(req,res)=>{
//     const id = req.params.id;
//     const name = req.params.name;

//     res.send("Id = "+id + " name = "+name)
// })


// 2. Query Strings

// app.get("/search",(req,res)=>{
//     const name =  req.query.name;
//     res.send("name Query : "+name);
// })

// http://localhost:5000/search?name=shubham


// 3_ multiple Query 
app.get("/search",(req,res)=>{
    const name =  req.query.name;
    const city = req.query.city
    res.send("name Query : "+name + " From :"+ city);
})

// http://localhost:5000/search?name=shubham&city=bharuch

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})