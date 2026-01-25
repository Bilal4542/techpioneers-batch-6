
const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./router/book.router')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors("http://localhost:5173"))


app.get('/', (req,res)=>{
    res.send('backend working correctly')
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) 

mongoose.connect('mongodb+srv://mbilal45422_db_user:HHv9ieuEy8xFu0Ux@cluster0.wmwoqff.mongodb.net/')
.then(()=>{
    console.log('database connected successfully')
}).catch((err)=>{
    console.log('database connection failed', err)
})


app.use('/book', bookRoutes)

const port = 4000

app.listen(port, ()=>{
    console.log('backend is running on port', port)
})