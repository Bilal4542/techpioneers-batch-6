const mongoose = require('mongoose')

const chairSchema = new mongoose.Schema({
    chairName:{
        type: String
    },
    chairType:{
        type: String
    },
    chairQuantity:{
        type:String
    }

})
module.exports = mongoose.model('chair', chairSchema)