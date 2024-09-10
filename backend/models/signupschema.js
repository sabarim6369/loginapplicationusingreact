const mongoose=require("mongoose");
const signup=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"name is required"]
  },
  email: {  
    type: String,
    required: true,
    unique: true, 

  },
  password:{
    type:String,
    required:[true,"password is required"]
  }
})
const Signup=mongoose.model("Signus",signup);
module.exports=Signup;