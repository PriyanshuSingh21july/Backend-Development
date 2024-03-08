import mongoose from "mongoose";


const ProductSchema=new mongoose.Schema({
descriptiob:{
               required:true,
               type:String,
},
name:{
               type:String,
               required:true,
             
               
},

productImage:{
               type:String
},
price:{
               default:0,

},
stock:{
              type:Number,
              default:0,  
},
category:{
               type:mongoose.Schema.Types.ObjectId,
               ref:"Category",
},
owner:{
               type:mongoose.Schema.Types.ObjectId,
}
             

},{timestamps:true})

export const Product=mongoose.model("Product",ProductSchema)
