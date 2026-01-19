const phonesModel = require("../models/phones.model")

exports.createPhone = async (req, res) => {
    try {

        const phoneName = req.body.phoneName
        const phoneDescription = req.body.phoneDescription
        const phoneCompany = req.body.phoneCompany
        const releaseDate = req.body.releaseDate

        const phone = new phonesModel({
            phoneName:phoneName,
            phoneDescription:phoneDescription,
            phoneCompany:phoneCompany,
            releaseDate:releaseDate
        })

        const result = await phone.save()

        res.status(200).json({
            message:'Phone Data Uploaded Successfully',
            data: result
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Phones Data Uploading Failed',
            error: error.message
        })
    }
}

exports.getPhones = async (req,res) => {
    try {
        
        const getPhones = await phonesModel.find()

        if(getPhones.length === 0){
            res.status(200).json({
                message:'No Phones Found',
                data: getPhones
            })
        }

        res.status(200).json({
            message:"Phones Data Getted Successfully",
            data: getPhones
        })

    } catch (error) {
        res.status(500).json({
            message:'Getting Phones Data Failed',
            error:error.message
        })
    }
}

exports.deletePhone = async (req,res) =>{
    try {
        
        const id = req.params.id
        const phone = await phonesModel.findByIdAndDelete(id)
         
        if(!phone){
            res.status(200).json({
                message: "Phone not founded",
                data: phone
            })
        }

        res.status(200).json({
            message:"Phone Deleted Successfully",
            data:phone
        })


    } catch (error) {
        res.status(500).json({
            message:"Delete Phone Failed",
            error:error.message
        })
    }
}

exports.getPhoneById = async (req,res) =>{
try {
        const id = req.params.id

    const phone = await phonesModel.findById(id)

    if(!phone){
        res.status(200).json({
            message:"no Phone found",
            data: phone
        })
    }
    res.status(200).json({
        message:"phone Getted Successfully",
        data: phone
    })
} catch (error) {
    res.status(500).json({
        message:"Phone Data Getting Failed",
        error:error.message
    })
}

}