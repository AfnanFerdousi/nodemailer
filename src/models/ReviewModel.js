const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        userId:{type:mongoose.Schema.Types.ObjectId, required:true},
        productId:{type:mongoose.Schema.Types.ObjectId, required:true},
        description:{type:String, required:true,},
        rating:{type:String, required:true,},

    },
    {timestamps:true,version:false}
)

const ReviewModel=mongoose.model('reviews', DataSchema)
module.exports=ReviewModel;