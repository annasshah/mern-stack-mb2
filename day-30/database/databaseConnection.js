import mongoose from "mongoose";

export const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database successfully connected')
    } catch (error) {
        console.log('Database connection failed')
    }
}