const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        userId:{type:mongoose.Schema.Types.ObjectId, required:true},
        productId:{type:mongoose.Schema.Types.ObjectId, required:true},
       color:{type:String, required:true,},
       size:{type:String, required:true,},
       qut:{type:String, required:true,},
       price:{type:String, required:true,}
    },
    {timestamps:true,version:false}
)

const CartModel=mongoose.model('carts', DataSchema)
module.exports=CartModel;