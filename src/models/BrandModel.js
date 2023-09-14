const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
    brandName:{type:String, trim:true, required:true},
    brandImg:{type:String, required: true}
},
    {timestamps:true,version:false}
)

const BrandModel=mongoose.model('brands', DataSchema)
module.exports=BrandModel;