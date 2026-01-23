
const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./router/book.router')

const app = express()
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('backend working correctly')
})

mongoose.connect('mongodb+srv://mbilal45422_db_user:HHv9ieuEy8xFu0Ux@cluster0.wmwoqff.mongodb.net/')
.then(()=>{
    console.log('database connected successfully')
}).catch((err)=>{
    console.log('database connection failed', err)
})

app.use('/book', bookRoutes)

const port = 6000

app.listen(port, ()=>{
    console.log('backend is running on port', port)
})