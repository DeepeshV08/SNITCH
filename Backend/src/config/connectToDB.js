import mongoose from "mongoose";
import { config } from "./config.js";

function connectDB(){
    mongoose.connect(config.MONGO_URI)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch(()=>{
        throw new Error("Failed to connect with database")
    })
}

export default connectDB;