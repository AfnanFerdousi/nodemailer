const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        ima1:{type:String, required:true},
        ima2:{type:String},
        ima3:{type:String},
        ima4:{type:String},
        dst:{type:String, required:true},
        color:{type:String, required:true},
        size:{type:String, required:true},
        productId:{type:mongoose.Schema.Types.ObjectId, required:true},


    },
    {timestamps:true,version:false}
)


const ProductDetailsModel=mongoose.model('productDetails', DataSchema)
module.exports=ProductDetailsModel;