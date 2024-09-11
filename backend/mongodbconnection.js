const mongoose=require("mongoose")
require("dotenv").config;
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://sabarim6369:sabari.m6369@reactfinal.e5sxd.mongodb.net/?retryWrites=true&w=majority&appName=reactfinal'
const a=mongoose.connect(mongoURI).then(con=>{
      console.log("connection successful with mongodb")
      })
module.exports=a; 