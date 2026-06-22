const express = require("express")

const router  = express.Router()
// console.log(router)

router.get("/student/:id", (req, res) => {
    const id = req.params.id;
    res.send("Student ID = " + id);

});

module.exports = router 