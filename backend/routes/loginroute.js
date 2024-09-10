const express=require("express");
const bcrypt=require("bcrypt")
const signup=require("../models/signupschema")
const loginrouter=express.Router();
loginrouter.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    try{
    const finduser=await signup.findOne({email:email});
    if(!finduser){
        return res.status(400).json({message:"account not registered.signup to login"})
    }
    const find=await bcrypt.compare(password,finduser.password);
    if(!find){
        return res.status(400).json({message:"incorrect password"});
    }
    else{
        return res.status(200).json({message:"login successful"})
    }
}
catch(err){
    res.status(500).json({ message: "Server error" });
    console.error(err);
}

})
module.exports=loginrouter;
