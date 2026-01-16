const mongoose = require('mongoose')
const express = require('express')
const carRoutes = require('./routes/car.route')

const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Backend is Running Accurately')
})

app.use('/cars', carRoutes)

mongoose.connect('mongodb+srv://mbilal45422_db_user:lqpfQ2zLxL52eRmh@cluster0.nyffoqs.mongodb.net/')
.then(()=>{
    console.log('Database Connected')
}).catch((err)=>{
    console.log("Database Conection Failed", err)
})

const port = 5000

app.listen(port, ()=>{
    console.log('Backend is running on port', port)
})