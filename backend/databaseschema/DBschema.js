const mongoose = require('mongoose')
const { Schema } = mongoose;
// const { model } = require('mongoose')
const blogSchema = new Schema({

    name: {
        type: String,
        required: true,
        minLength: [3, "please enter at least 3 characters"],
        maxLength: [20, "cannot exceed name from 20 characters"]
    },
    Email: {
        type: String,
        required: true,
        unique: [true, "user already register in this email "],

    },
    // password: {
    //     type: String,
    //     required: true,
    //     minLength: [8, "please enter at least 8  characters"],
    //     // maxLength: [20, "password shoud be must at least 20 character"]
    // },
    Message: {
        type: String,
        required: true,

    },
    Creatingat: {
        type: Date,
        default: Date.now(),

    }
});
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;