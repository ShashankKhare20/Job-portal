import mongoose from "mongoose";


const connectDB=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongoDB Database ${mongoose.connection.host}`);
    }catch(error){
        console.log(`mongoDB error ${error}`);
    }

}

export default connectDB;