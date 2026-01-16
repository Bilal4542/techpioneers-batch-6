const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentRollNo:{
        type: Number
    },
    studentName:{
        type: String
    },
    fatherName:{
        type: String
    },
    studentEmail:{
        type: String
    }
})

module.exports = mongoose.model('student', studentSchema)