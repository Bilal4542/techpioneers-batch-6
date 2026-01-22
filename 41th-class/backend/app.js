const express = require('express')
const mongoose  = require('mongoose')
const userRoutes = require('./routes/user.routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors('http://localhost:5173/'))

app.get('/', (req,res)=>{
    res.send('Backend is wroking correctly')
})

app.use('/user', userRoutes)

mongoose.connect('mongodb+srv://mbilal45422_db_user:hfwcPV8ZlWh4ULUS@cluster0.xsbvsiz.mongodb.net/')
.then(()=>{
    console.log('database Connected successfully')
}).catch((err)=>{
    console.log('database connection failed', err)
})



const port = 3000

app.listen(port, ()=>{
    console.log('Backend is running on port', port)
})