const mongoose=require("mongoose")
const a=mongoose.connect("mongodb+srv://sabarim6369:sabari.m6369@reactfinal.e5sxd.mongodb.net/?retryWrites=true&w=majority&appName=reactfinal").then(con=>{
      console.log("connection successful with mongodb")
      })
module.exports=a; 