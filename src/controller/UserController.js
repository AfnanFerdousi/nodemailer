const UserModel = require("../models/UserModel");
const SendEmailUtility = require("../utility/SendEmail");


exports.UserLogin=async (req,res)=>{
    let email=req.params.email;
    let code=Math.floor(100000 + Math.random() * 900000);
    let EmailText="Your verification code is "+code;
    try{
        await SendEmailUtility(email,EmailText,"PIN Email Verification");
        await UserModel.updateOne(
            {email:email}, {$set:{otp:code}}, {upsert:true})

        return res.status(200).json({status:'success', message:"Email Sent"})
    }
    catch(err){
        console.log(err);
        return res.status(200).json({status:'fail', message:"Something went wrong"})
    }

}
exports.VerifyLogin=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"VerifyLogin"
    })
}

exports.UserLogout=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"UserLogin"
    })
}






