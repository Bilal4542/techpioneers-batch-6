const carPlan = require('../models/car.model')

exports.createCar = async (req,res) =>{
    try {
        
        const carName = req.body.carName
        const carDescription = req.body.carDescription
        const carModel = req.body.carModel
        const carPrice = req.body.carPrice

        const car = new carPlan({
             carName: carName,
             carDescription: carDescription,
             carModel: carModel,
             carPrice: carPrice
        })

        const result = await car.save()

        res.status(200).json({
            message:"Car data uploaded Successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            message: 'Car Data uploading Failed',
            error: error.message
        })
    }
}