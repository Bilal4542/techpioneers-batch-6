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

exports.getStudents = async (req,res) =>{
    try {
        

        const getStudents = await studentModel.find()

        if(getStudents.length === 0){
            res.status(200).json({
                message:"No Student Found",
                data: getStudents
            })
        }
        res.status(200).json({
            message: "Students Data Get it Successfully",
            data:getStudents
        })



    } catch (error) {
         res.status(500).json({
            message:'Error getting Students Data',
            error: error.message
        })
    }
}

exports.deleteStudent = async (req,res) => {
    try {

        const rollNo = req.params.rollNo

        const student = await studentModel.findOneAndDelete({studentRollNo: rollNo})

        if(!student){
            res.status(200).json({
                message:"No Student found",
                data:student
            })
        }

        res.status(200).json({
            message:"Student Data deleted Successfully",
            data:student
        })


    } catch (error) {
        res.status(500).json({
            message:"Student data deletion failed",
            error:error.message
        })
    }
}

exports.getStudentById = async (req,res) => {
    try {
        
        const rollNo = req.params.rollNo

        const student = await studentModel.findOne({studentRollNo:rollNo})

        if(!student){
            res.status(200).json({
                message:"No Student found",
                data: student
            })
        }

        res.status(200).json({
            message:"Student data getted successfully",
            data:student
        })


    } catch (error) {
        res.status(200).json({
            message:"Student data getting failed",
            error:error.message
        })
    }
}