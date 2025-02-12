import bcryptjs from 'bcryptjs';
import User from "../models/User.js";

export const signUp = async (req, res, next) => {
    try{
        const {username , email , password} = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json(`Unexpected error in sign up: ${err}`);
    }
}