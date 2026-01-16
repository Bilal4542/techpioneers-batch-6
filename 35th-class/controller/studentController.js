const studentModel = require('../models/studentModel')

exports.createStudent = async (req,res)=>{
    try {
        const studentRollNo = req.body.studentRollNo
        const studentName = req.body.studentName
        const fatherName = req.body.fatherName
        const studentEmail = req.body.studentEmail

        const Student = new studentModel ({
            studentRollNo: studentRollNo,
            studentName: studentName,
            fatherName: fatherName,
            studentEmail: studentEmail
        })

        const result = await Student.save();

        res.status(200).json({
            message:"Student Created Successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            message:'Error Uploading Student Data',
            error: error.message
        })
    }
}