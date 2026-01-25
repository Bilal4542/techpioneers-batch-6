const express = require('express')
const router = express.Router()

const bookController = require('../controller/book.controller')

router.post('/postbook', bookController.createBook)
router.get('/getbooks', bookController.getBooks)
router.put('/updatebook/:id', bookController.updateBook)
router.delete('/deletebook/:id', bookController.deleteBook)
router.get('/getbookbyid/:id', bookController.getbookById)


module.exports = router

