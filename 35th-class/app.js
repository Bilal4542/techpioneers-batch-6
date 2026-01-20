const express = require('express')
const mongoose = require('mongoose')
const studentRoutes = require('./routes/studentRoutes')
const app = express()
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('backend is running Accurately')
    })

app.use('/students', studentRoutes)


mongoose.connect('mongodb+srv://mbilal45422_db_user:466YhYsHLsPQUED8@cluster0.zawrjkt.mongodb.net/')
.then(()=>{
    console.log('Database Connected Successfully')
}).catch((err)=>{
    console.log('Database Connection Failed', err)
})


const port = 3000

app.listen(port, ()=>[
    console.log('app is running on port ', port)
])


// mongodb+srv://mbilal45422_db_user:466YhYsHLsPQUED8@cluster0.zawrjkt.mongodb.net/