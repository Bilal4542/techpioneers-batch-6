const userModel = require('../models/user.model')

exports.postuser = async (req,res)=>{
    try {
         
        const {userName,userEmail,userAge,userPhone} = req.body;

        const user = new userModel({
            userName:userName,
            userEmail:userEmail,
            userAge:userAge,
            userPhone:userPhone
        })

        const result = await user.save()

        res.status(200).json({
            message:"User data stored Successfully",
            data:result
        })
    } catch (error) {
        res.status(500).json({
            message:"getting user failed",
            error:error.message
        })
    }
}