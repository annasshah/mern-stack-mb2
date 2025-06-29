import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    }
    // tags:{

    // }


}, { timestamps: true })

// //  single fields indexing
// todoSchema.index({title: 1})

// // compound indexing  
// todoSchema.index({title: 1, userId: 1})


export const Todo = mongoose.model('todo', todoSchema)