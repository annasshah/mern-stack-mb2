import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        // trim:true 
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true})

export const User = mongoose.model('user', userSchema)