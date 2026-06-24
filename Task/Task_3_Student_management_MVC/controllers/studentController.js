const getStudents =(req,res)=>{
    console.log("url : ",req.url," Method : ",req.method)
    res.send("Gell All Students")
}

const addStudent =(req,res)=>{
    console.log("url : ",req.url," Method : ",req.method)
    res.send("Student Added")
}

module.exports = {
    getStudents,
    addStudent
}