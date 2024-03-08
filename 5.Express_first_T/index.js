const express=require("express");
const app=express();

app.get("/about",(req,res)=>{
            res.send("Hello from express")
})

app.get("/contact",(res,req)=>{
               res.send("Welcome to contact  page")
})
app.listen(8000);
console.log("server start")