const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('backend is running Accurately')
    })

const port = 3000

app.listen(port, ()=>[
    console.log('app is running on port ', port)
])