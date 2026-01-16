const express = require('express')
const router = express.Router()
const shoeController = require('../controller/shoes.controller')

router.post('/createShoes', shoeController.createShoes)
module.exports = router