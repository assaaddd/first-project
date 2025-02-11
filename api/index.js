import express from 'express';
import { configDotenv } from 'dotenv';

import connectToMongoDb from './config/connectToMongoDb.js';
import userRouter from './routes/user_route.js';

const app = express();
const PORT = 3000;

configDotenv();

app.use('/api/user', userRouter);

app.listen(PORT, () => {
    try {
        console.log(`Listening to the port:${PORT}`);
        connectToMongoDb()
    } catch {
        console.log('Error in app listen');
    }
});
