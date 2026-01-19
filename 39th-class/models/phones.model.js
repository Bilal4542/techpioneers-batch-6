const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({
    phoneName:{
        type:String
    },
    phoneDescription:{
        type:String
    },
    phoneCompany:{
        type:String
    },
    releaseDate:{
        type:String
    }
})

module.exports = mongoose.model('phone', phoneSchema)