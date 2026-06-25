const express = require("express")

const router = express.Router()

const { employeeName, getAllEmployee, addEmployee, deleteEmployee, updateEmployee,EmployeeId } = require("../controllers/employeeController")

// all
router.get("/",getAllEmployee);

// name 
router.get("/search",employeeName)

// id single emplyoo
router.get("/:id",EmployeeId)

// add
router.post("/",addEmployee)

// update
router.put("/:id",updateEmployee)

// delete data
router.delete("/:id",deleteEmployee)

module.exports = router