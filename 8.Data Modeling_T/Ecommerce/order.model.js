import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
orderPrice:{
               type:Number,
               required:true
},
customer:{
               type:mongoose.Schema.Types.ObjectId,
               ref:"User",
},
orderIteam:{
               type:[ToderIteamSchema]
},
address:{
               type:String,
               required:true,
},

status:{
               type:String,
               enum:["Pending","Cancelled","Deliverd"],
               default:"Pending"
}



},{timestamps})


export const Order=mongoose.model("Order",orderSchema)