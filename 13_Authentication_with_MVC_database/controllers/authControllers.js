const User = require("../model/User")

// password original store na kare database ni under
const bcrypt = require("bcryptjs")

// server Token Create karav
const jwt = require("jsonwebtoken")

const register = async(req,res)=>{
    try {
        // desctring
        const {name,email,password} = req.body

        // hash  password banava
        const hashpassword = await bcrypt.hash(password,10)

        // save user

        const user = await User.create({
            name,
            email,
            password : hashpassword
        })

        res.status(201).json({
            message: "User Registered",
            user
        })
        
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        // find user
        const user = await User.findOne({email});

        // email not found
        if(!email){
            return res.status(404).json({
                message : "User Not Found"
            })
        }

        // Compare Password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
             return res.status(400).json({
                message: "Invalid Password"
            });
        }

        // user login Generate Token
        const token = jwt.sign(

            {id:user._id},

            "secretkey",

            {expiresIn:"1d"}
        )

         res.status(200).json({
            message: "Login Success",
            token
        });

    } catch (error) {
        
    }
}

module.exports = {
    register,login
}
