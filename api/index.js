import express from 'express';
import { configDotenv } from 'dotenv';

import connectToMongoDb from './config/connectToMongoDb.js';
import userRouter from './routes/user_route.js';
import authRouter from './routes/auth_route.js';

configDotenv();

const app = express();
const PORT = 3000;

app.use(express.json())

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    try {
        console.log(`Listening to the port:${PORT}`);
        connectToMongoDb();
    } catch {
        console.log('Error in app listen');
    }
});

app.use((err , req , res , next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});
