const mongoose = require('mongoose')

const shoeSchema = new mongoose.Schema({
    shoeName:{
        type: String
    },
    shoeCompany:{
        type: String
    },
    shoePrice:{
        type: Number
    },
    shoeQuantity:{
        type: Number
    }

})
module.exports = mongoose.model('shoe', shoeSchema)