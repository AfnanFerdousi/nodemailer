const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        categoryName:{type:String, trim:true, required:true},
        categoryImg:{type:String, required: true}
    },
    {timestamps:true,version:false}
)

const CategoryModel=mongoose.model('categories', DataSchema)
module.exports=CategoryModel;