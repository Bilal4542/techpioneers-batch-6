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

exports.getUsers = async(req,res) => {
    try {
        
        const users = await userModel.find()
        if(users.length === 0){
            res.status(200).json({
                message:"No user found",
                data:users
            })
        }

        res.status(200).json({
            message:"user getted successfully",
            data:users
        })

    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}