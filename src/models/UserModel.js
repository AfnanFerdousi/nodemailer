const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        email:{type:String, required:true, lowercase:true, unique:true},
        otp:{type:String, required:true},

    },
    {timestamps:true,version:false}
)


const UserModel=mongoose.model('users', DataSchema)
module.exports=UserModel;