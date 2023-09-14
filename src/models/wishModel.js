const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        userId:{type:mongoose.Schema.Types.ObjectId, required:true},
        productId:{type:mongoose.Schema.Types.ObjectId, required:true},
    },
    {timestamps:true,version:false}
)

const wishModel=mongoose.model('wishes', DataSchema)
module.exports=wishModel;