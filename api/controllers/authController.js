import bcrypt from 'bcrypt';
import User from "../models/User.js";

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
        res.status(500).json(err.message)
    }
}