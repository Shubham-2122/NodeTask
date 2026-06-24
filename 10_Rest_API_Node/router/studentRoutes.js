const express = require("express");

const router = express.Router();

// import form controller
const {
  addstudent,
  getStudent,
  deleteStudent,
  updateStudent,
  getsingle,
  StudentName
} = require("../controllers/studentController");


// routes define
// get
router.get("/students",getStudent);

// student by Name static routes
router.get("/students/search",StudentName)

// single user dynamic routes
router.get("/students/:id",getsingle)



// post
router.post("/students",addstudent);

// put
router.put("/students/:id",updateStudent);

// delete
router.delete("/students/:id",deleteStudent);

module.exports = router
