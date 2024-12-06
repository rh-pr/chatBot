const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createTocken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id}, jwtkey);
}

const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        let user = await userModel.findOne({email});
   
        if(user) {
            const token = createTocken(user._id);

           res.status(200).json({id: user._id, email, token});
        } else {
            user = new userModel({email, password});
    
            const token = createTocken(user._id);
            
            const salt = await bcrypt.genSalt(10);
            console.log(salt);
            
            user.password = await bcrypt.hash(user.password, salt);
    
            await user.save();
        
            res.status(200).json({id: user._id, email, token})
        }

       
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
}

module.exports = {
    login
}