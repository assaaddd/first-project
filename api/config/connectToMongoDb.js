import mongoose from 'mongoose';

export const connectToMongoDB = async() => {
    try{
      await mongoose.connect(process.env.MONGO_DB_URI);
      console.log('Connected to MongoDB');  
    }catch(err){
        throw new Error(`Error in connecting to MongoDB:${err}`);
    }
}
