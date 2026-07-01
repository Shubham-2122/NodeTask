const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

// register

const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    // email validation
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailpattern.test(email)) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    // password check
    if (password != confirmPassword) {
      return res.status(400).json({
        message: "Password Not Match",
      });
    }

    // chec user

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email Already Exists",
      });
    }

    // hash password

    const hashPassword = await bcrypt.hash(
        password,10
    )
    // creatae user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });
        res.status(201).json({
            message: "User Registered"
        });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login =async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                message: "User Not Found"
            });

        }

        // comapre password

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        // Token 
        const token = jwt.sign(
            {
                id:user._id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn : "1d"
            }
        );
        res.status(200).json({
            message: "Login Success",
            token
        });
        
    } catch (error) {
         res.status(201).json({
            message: "User Registered"
        });
    }
}

module.exports = {
    register,
    login
}
