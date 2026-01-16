const express = require('express')
const mongoose = require('mongoose')
const shoeRoute = require('./routes/shoes.route')

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Backend is running Successfully')
})

app.use('/shoes', shoeRoute)

mongoose.connect('mongodb+srv://mbilal45422_db_user:39GtxbHoboXXcDXO@cluster0.qs8spbs.mongodb.net/')
.then(()=>{
    console.log('Database Connected Succesfully')
}).catch((err)=>{
    console.log('Database Connection Failed...', err)
})

const port = 8000

app.listen(port,()=>{
    console.log('App is Running on port', port)
})