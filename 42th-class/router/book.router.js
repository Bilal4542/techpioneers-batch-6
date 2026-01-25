const express = require('express')
const router = express.Router()
const upload = require('../uploads/middleware')
const bookController = require('../controller/book.controller')

router.post('/postbook', upload.single('bookImage'), bookController.createBook)
router.get('/getbooks', bookController.getBooks)
router.put('/updatebook/:id', upload.single('bookImage'), bookController.updateBook)
router.delete('/deletebook/:id', bookController.deleteBook)
router.get('/getbookbyid/:id', bookController.getbookById)


module.exports = router

