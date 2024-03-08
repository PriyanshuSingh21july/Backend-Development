import mongoose from "mongoose";

const subTodoSchema=new mongoose.Schema({
content:{
               type:String,
               required:true,

},
complete:{
               type:Boolean,
               default:false
},
createdby:{
               type:mongoose.Schema.Types.ObjectId ,
               ref:"User"
},
subTodo:[

               {
                              type:mongoose.Schema.Types.ObjectId,
                              ref:"'SubTodo"
               }
] //arrays of subtodo


},{timestamps:true});

export const subTodo=mongoose.model("SubTodo",subTodoSchema);

