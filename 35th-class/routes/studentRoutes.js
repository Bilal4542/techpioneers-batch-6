const express = require('express')
const router = express.Router()

const studentCnotroller = require('../controller/studentController')
router.post('/createStudent', studentCnotroller.createStudent)
router.get('/getStudents', studentCnotroller.getStudents)
router.delete('/deleteStudent/:rollNo', studentCnotroller.deleteStudent)
router.get('/getStudent/:rollNo', studentCnotroller.getStudentById)


module.exports = router