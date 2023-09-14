const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        title:{type:String, required:true},
        dst:{type:String, required:true},
        price:{type:String, required:true},
        image:{type:String, required:true},
        productId:{type:mongoose.Schema.Types.ObjectId, required:true},

    },
    {timestamps:true,version:false}
)


const ProductSlider=mongoose.model('productSliders', DataSchema)
module.exports=ProductSlider;