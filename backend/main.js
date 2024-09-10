const express=require("express");
require("dotenv").config();
const bcrypt=require("bcrypt");
const app=express();
const signup=require("./models/signupschema")
const mongodbconnection=require("./mongodbconnection")
app.use(express.json());
const cors = require('cors');
app.use(cors());
const signuproute=require("./routes/signuproute");
const loginrouter = require("./routes/loginroute");
app.use("/",signuproute)
app.use("/",loginrouter)
app.listen(4000,()=>{
    console.log("port started in 4000");
})