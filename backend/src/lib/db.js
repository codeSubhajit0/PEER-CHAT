import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connect: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        // 21:11
    }
}
