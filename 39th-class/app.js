const express = require('express')
const { mongoose } = require('mongoose')
const phoneRoutes = require('./routes/phone.routes')
const cors = require('cors')
// const bodyParser = require('body-parser')


const app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }));           
// app.use(bodyParser.json())
app.use(cors('http://localhost:5173'))

app.get('/', (req,res)=>{
    res.send('Backend Run Successfully')
})




mongoose.connect('mongodb+srv://mbilal45422_db_user:kVtCQlxspEciubas@cluster0.ugnwdxq.mongodb.net/')
.then(()=>{
    console.log('Database Connected Successfully')
}).catch((err)=>{
    console.log('Database Connection Failed')
})

app.use('/phone', phoneRoutes)

const port = 9000

app.listen(port, ()=>{
    console.log('Backend is runnig on port ', port)
})