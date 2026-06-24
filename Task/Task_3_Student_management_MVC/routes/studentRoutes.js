const express = require("express")

const route = express.Router()

const studentController = require("../controllers/studentController")

route.get("/",studentController.getStudents)

route.post("/add",studentController.addStudent)

module.exports = route
