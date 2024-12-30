import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { errorHanler } from '../utils/error.js';

export const signUp = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res
                .status(400)
                .json('All fields are mandatory!');
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json('User with this email already exists')
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })
        return res
            .status(201)
            .json(newUser);
    } catch (err) {
        next(err)
    }
}

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHanler(404, `User not found`));
        const validPassword = await bcrypt.compare(password, validUser.password);
        if (!validPassword) return next(errorHanler(401, 'Wrong credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (err) {
        next(err);
    }
}


