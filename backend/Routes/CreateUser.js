const express=require("express");
const router=express.Router();

const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecret="kjgjkjgjjhvjnvnmhghgfgf"


const User=require("../models/User");
const { redirect } = require("react-router-dom");


router.post("/createuser", async(req, res)=>{

    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password, salt);
    try{
       await  User.create({
            username:req.body.username,
            password:secPassword,
            email:req.body.email,
        })
        res.json({success:true})
        // res.redirect('/')
        
    }
    catch(err){
        console.log(err);
        res.json({success:false})
    }
})





router.post("/loginuser", async(req, res)=>{
    let email=req.body.email;
    try{
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(404).json({errors:"try again logging with correct data"});

        }
        const pwdPassword=await bcrypt.compare(req.body.password,userData.password);
        if(!pwdPassword){
            return res.status(404).json({errors:"try again logging with correct data"});
        }

        const data={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data, jwtSecret)
        return res.json({success:true, authToken:authToken} )
    }
    catch(err){
        return res.json({success:false})

    }
})

module.exports=router;