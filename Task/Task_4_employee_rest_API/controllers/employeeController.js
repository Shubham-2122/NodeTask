let employees = []

// all employee 
const getAllEmployee=(req,res)=>{
    res.status(200).json(employees)
}

// add emplyooe
const addEmployee=(req,res)=>{
    employees.push(req.body);

    res.status(201).json({
        message: "Employee Added"
    })
}

// get id emplyoo
const EmployeeId =(req,res)=>{
    const id = req.params.id;

    const employee = employees.find(emp => emp.id == id);
    if(employee) {
        res.status(200).json(employee);
    } else {
        res.status(404).json({
            message: "Employee Not Found"
        });
    }
}

// serach name
const employeeName =(req,res)=>{
    const name = req.query.name;

    const result = employees.filter(
        emp => emp.name.toLowerCase().includes(name.toLowerCase())
    )

    if(result.length > 0) {
        res.status(200).json(result);
    } else {
        res.status(404).json({
            message: "Employee Not Found"
        });
    }
}

// UPDATE EMPLOYEE
const updateEmployee = (req, res) => {

    const id = req.params.id;
    const employee = employees.find(emp => emp.id == id);

    if(employee) {
        employee.name = req.body.name;
        employee.department = req.body.department;
        employee.salary = req.body.salary;

        res.status(200).json({
            message: "Employee Updated"
        });
    } else {

        res.status(404).json({
            message: "Employee Not Found"
        });

    }

};

// DELETE EMPLOYEE
const deleteEmployee = (req, res) => {

    const id = req.params.id;

    employees = employees.filter(emp => emp.id != id);

    res.status(200).json({
        message: "Employee Deleted"
    });

};

module.exports = {
    getAllEmployee,
    addEmployee,
    EmployeeId,
    employeeName,
    updateEmployee,
    deleteEmployee
}
