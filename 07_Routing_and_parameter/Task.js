const express = require("express");

const app = express();


// Home Route
app.get("/", (req, res) => {

    res.send("Home Page");

});


// Student Route Parameter
app.get("/student/:id", (req, res) => {

    const id = req.params.id;

    res.send("Student ID = " + id);

});


// Search Query
app.get("/search", (req, res) => {

    const name = req.query.name;

    res.send("Search = " + name);

});


// Product Details
app.get("/product/:id", (req, res) => {

    const id = req.params.id;

    res.send("Product ID = " + id);

});


// Movie Route
app.get("/movie/:name", (req, res) => {

    const movie = req.params.name;

    res.send("Movie = " + movie);

});


app.listen(3000, () => {

    console.log("Server Running");

});