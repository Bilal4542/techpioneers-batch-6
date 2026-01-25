const mongoose  = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookCategory:{
        type:String
    },
    bookTitle:{
        type:String
    },
    bookDescription:{
        type:String
    },
    bookPrice:{
        type:Number
    },
    bookImage:{
        type:String
    }
})
module.exports = mongoose.model('book', bookSchema)