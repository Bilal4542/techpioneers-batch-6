const express = require('express')
const router = express.Router()

const chairController = require('../controller/chair.controller')

router.post('/createChair', chairController.createChair)
router.get('/getChairs', chairController.getChairs)

module.exports = router