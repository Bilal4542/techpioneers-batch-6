const chairModel = require('../model/chair.model')

exports.createChair = async (req,res)=>{
    try {
        
        const chairName = req.body.chairName
        const chairType = req.body.chairType
        const chairQuantity = req.body.chairQuantity

        const chairs = new chairModel({
            chairName:chairName,
            chairType:chairType,
            chairQuantity:chairQuantity
        })

        const result = await chairs.save()

        res.status(200).json({
            message:"Chair Data Uploaded Successfully",
            data: result
        })








    } catch (error) {
        res.status(500).json({
            message:"Chair data uploading failed",
            error: error.message
        })
    }
}

exports.getChairs = async (req,res)=>{
    try {
        
        const chairsData = await chairModel.find()

        if(chairsData.length === 0){
            res.status(200).json({
                message:"No Chair Found",
                data: chairsData
            })
        }

        res.status(200).json({
            message:"Chairs Data Get it Successfully",
            data:chairsData
        })

    } catch (error) {
        res.status(500).json({
            message:"Getting Chairs Data Failed",
            error:error.message
        })
    }
}