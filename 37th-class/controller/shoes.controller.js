const shoeModel = require('../model/shoes.model')


exports.createShoes = async (req,res) =>{
    try {
        
        const shoeName = req.body.shoeName
        const shoeCompany = req.body.shoeCompany
        const shoePrice = req.body.shoePrice
        const shoeQuantity = req.body.shoeQuantity


        const shoes = new shoeModel({
            shoeName:shoeName,
            shoeCompany:shoeCompany,
            shoePrice:shoePrice,
            shoeQuantity:shoeQuantity
        })

        const result = await shoes.save()

        res.status(200).json({
            message:"Shoe Data Uploaded Successfully",
            data: result
        })



    } catch (error) {
        res.status(500).json({
            message: 'Shoes Data Uploading Failed',
            error: error.message
        })
    }
}