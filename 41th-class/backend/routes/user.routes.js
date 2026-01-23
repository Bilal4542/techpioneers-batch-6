const express = require('express')
const userController = require('../controller/user.controller')
const router = express.Router()

router.post('/postuser', userController.postuser)
router.get('/getusers', userController.getUsers)

module.exports = router