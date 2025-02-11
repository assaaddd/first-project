import mongoose from 'mongoose';

const connectToMongoDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
        console.log('Connected to MongoDB');
    }catch(err){
        throw new Error(`Error in connecting to database: ${err}`)
    }
}
export default connectToMongoDb;