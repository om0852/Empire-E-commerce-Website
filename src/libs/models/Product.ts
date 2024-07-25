import { model, models, Schema } from "mongoose";

const productSchema= new Schema({
imgSrc:{
    type:String,
    require:true
},
fileKey:{
type:String,
    require:true
},
name:{
    type:String,
    require:true
},
category:{
    type:String,
    require:true
},
price:{
    type:String,
    require:true
},
})
const  productModel = models.Product || model("Product",productSchema);
export default productModel;