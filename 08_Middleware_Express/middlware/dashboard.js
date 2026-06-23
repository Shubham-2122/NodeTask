const express = require("express");

const route = express.Router();

// Import Middleware
const auth = require("./auth");

route.get("/dashboard", auth, (req, res) => {

    res.send("Dashboard");

});

module.exports = route;