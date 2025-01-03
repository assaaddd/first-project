import express from 'express';
import { configDotenv } from 'dotenv';

import { connectToMongoDB } from './config/connectToMongoDb.js';
import userRouter from "./routes/userRoute.js";
import authRouter from './routes/authRoute.js';

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/user' , userRouter);
app.use('/api/auth' , authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
});

app.listen(PORT , () => {
    try{
        console.log(`Listening to the port:${PORT}`);
        connectToMongoDB()
    }catch(err){
        throw new Error(`Error in connecting to server:${err}`)
    }
});
