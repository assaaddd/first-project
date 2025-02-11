import express from 'express';
import { configDotenv } from 'dotenv';

import connectToMongoDb from './config/connectToMongoDb.js';

const app = express();
const PORT = 3000;

configDotenv()

app.listen(PORT, () => {
    try {
        console.log(`Listening to the port:${PORT}`);
        connectToMongoDb()
    } catch {
        console.log('Error in app listen');
    }
})
