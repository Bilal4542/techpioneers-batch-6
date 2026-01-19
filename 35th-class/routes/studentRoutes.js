const express = require('express')
const router = express.Router()

const studentCnotroller = require('../controller/studentController')
router.post('/createStudent', studentCnotroller.createStudent)
router.get('/getStudents', studentCnotroller.getStudents)

module.exports = router