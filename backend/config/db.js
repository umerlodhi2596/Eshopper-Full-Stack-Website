import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database is connected")
    } catch (error) {
        console.log(error || "something went wrong")
    }
}

export default connectDB;