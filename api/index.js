import express from 'express';
import { configDotenv } from 'dotenv';

import { connectToMongoDB } from './config/connectToMongoDb.js';

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT , () => {
    try{
        console.log(`Listening to the port:${PORT}`);
        connectToMongoDB()
    }catch(err){
        throw new Error(`Error in connecting to server:${err}`)
    }
});
