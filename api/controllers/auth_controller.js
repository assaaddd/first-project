import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/User.js";
import { errorHandler } from '../utils/error.js';

export const signUp = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
}
export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
        const token = jwt.sign({id: validPassword._id}, process.env.JWT_SECRET);
        const {password : pass , ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);

    } catch (err) {
        next(err)
    }
}