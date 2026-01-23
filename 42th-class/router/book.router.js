const express = require('express')
const router = express.Router()

const bookController = require('../controller/book.controller')

router.post('/postbook', bookController.createBook)
router.get('/getbooks', bookController.getBooks)
router.get('/updatebook/:id', bookController.updateBook)

module.exports = router

