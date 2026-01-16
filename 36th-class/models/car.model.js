const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    carName:{
        type: String
    },
    carDescription:{
        type: String
    },
    carModel:{
        type: Number
    },
    carPrice:{
        type: Number
    }
})
module.exports = mongoose.model('car', carSchema)