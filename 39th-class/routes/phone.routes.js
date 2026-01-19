const express = require('express')
const phoneController  = require('../controllers/phone.controller')
const router = express.Router()

router.post('/createPhone', phoneController.createPhone)
router.get('/getPhones', phoneController.getPhones)
router.delete('/deletePhone/:id', phoneController.deletePhone)
router.get('/getPhoneBy/:id', phoneController.getPhoneById)
module.exports = router

