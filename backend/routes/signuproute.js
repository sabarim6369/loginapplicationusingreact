    const express=require("express");
    const signuprouter=express.Router();
    const bcrypt = require("bcrypt");  ``
const signup = require("../models/signupschema"); 
    signuprouter.post("/signup", async (req, res) => {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send('All fields are required');
        }
        
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await signup.create({
                name: name,
                email: email,
                password: hashedPassword
            });
            console.log("Success inserting");
            res.status(201).json({message:"User created successfully"});
        } catch (err) {
            if (err.code === 11000) { 
                res.status(400).json({message:'Email already exists'});
            } else {
                res.status(500).send({message:'Server error'});
            }
            console.log(err);
        }
    });
    module.exports=signuprouter