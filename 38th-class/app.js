const express = require('express')
const mongoose = require('mongoose')
const chairRoute = require('./routes/chair.route')

const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Backend running successfully')
})

app.use('/chair', chairRoute)


mongoose.connect('mongodb+srv://mbilal45422_db_user:0pICbuDM6UxzZzuY@cluster0.etkiaa4.mongodb.net/')
.then(()=>{
    console.log('database connected Successfully')
}).catch((err)=>{
    console.log('dataase connection failed', err)
})

const port = 6000

app.listen(port,()=>{
    console.log('backend is running on port ', port)
})