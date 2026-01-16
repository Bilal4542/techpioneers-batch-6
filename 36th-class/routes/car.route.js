const express = require('express')
const router = express.Router()

const carController = require('../controller/car.controller')
router.post('/createCar', carController.createCar)

module.exports = router