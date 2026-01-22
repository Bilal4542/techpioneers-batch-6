const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    userName:{
        type:String
    },
    userEmail:{
        type:String
    },
    userAge:{
        type: Number
    },
    userPhone:{
        type:Number
    }
})
module.exports = mongoose.model('user', userModel)
