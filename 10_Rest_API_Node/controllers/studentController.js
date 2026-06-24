let students = [];

// post // create data
const addstudent=(req,res)=>{
    students.push(req.body);

    res.status(201).json({
        message : "Student added successfully"
    })
}

// get //all student

const getStudent=(req,res)=>{
    
    res.status(200).json(students)
}

// get single user finde
const getsingle =(req,res)=>{
    const id = req.params.id 

    const student = students.find(s => s.id == id)
        if(student){
        res.status(200).json(student);
    } else {
        res.status(404).json({
            message: "Student Not Found"
        });
    }
}

// delete //one student

const deleteStudent =(req,res)=>{
    const id = req.params.id;

    students =  students.filter(s => s.id != id);
    res.status(200).json({
         message: "Student Deleted successfully"
    })
}

// update //put

const updateStudent=(req,res)=>{

    const id = req.params.id;

    // single student find method use
    const student = students.find(s => s.id == id)

    if(student){
        student.name = req.body.name;
        student.course =  req.body.course;

        res.status(200).json({
              message: "Student Updated success"
        })
    }
    else{
         res.status(404).json({
            message: "Student Not Found"
        });
    }
}


const StudentName =(req,res)=>{
    const name = req.query.name;

    const student = students.filter(
        s => s.name.toLowerCase() === name.toLowerCase()
    );

    if(student){
        res.json(student)
    }
    else{
         res.status(404).json({
            message: "Student Not Found"
        });
    }
}

// both name
// const searchStudent = (req, res) => {

//     const { name, course } = req.query;

//     const result = students.filter(student => {

//         return (
//             student.name.toLowerCase() === name.toLowerCase() &&
//             student.course.toLowerCase() === course.toLowerCase()
//         );

//     });

//     res.json(result);

// };


module.exports = {
    getStudent,
    deleteStudent,
    updateStudent,
    addstudent,
    getsingle,
    StudentName
}
