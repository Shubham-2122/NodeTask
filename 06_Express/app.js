// console.log("Hello Epxress 2")
const express = require("express")

const app = express();

app.get("/", (req, res) => {
    console.log("req url", req.url, "req method :", req.method)
    // res.send("Welcome to node page")
    res.write("Welcome to home page")
    res.end();
})

// there are multiple routes handling
app.get("/about", (req, res) => {
    console.log("req url", req.url, "req method :", req.method)
    res.write("Welcome to About page")
    res.end();
})

app.get("/contact", (req, res) => {
    console.log("req url", req.url, "req method :", req.method)
    res.write("Welcome to Contact page")
    res.end();
})

app.listen(5000, () => {
    console.log(`server Runing : http://localhost:5000/`)
})