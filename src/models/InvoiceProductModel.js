const mongoose= require('mongoose');
const DataSchema=mongoose.Schema({
        invoice_id:{type:mongoose.Schema.Types.ObjectId, required:true},
        product_id:{type:mongoose.Schema.Types.ObjectId, required:true},
        qty:{type:String, required:true,},
        sale_price:{type:String, required:true,},
        color:{type:String, required:true,},
        size:{type:String, required:true,},


    },
    {timestamps:true,version:false}
)

const InvoiceProductModel=mongoose.model('invoiceProducts', DataSchema)
module.exports=InvoiceProductModel;