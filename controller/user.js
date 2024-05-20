const user= require("../models/user");
const { v4: uuidv4 } = require('uuid');
const {setuser}=require('../service/auth')

const handleGenerateNewUSer =async(req,res)=>{
   const{name,email,password,password1}=req.body;
   await user.create({
    name,
    email,
    password,
    password1,
    
   })
   return res.render('home');

}

const handleuserLogin=async(req,res)=>{
    const{email,password}=req.body;
    const User= await user.findOne({email,password})
    
     if(!User)
     {
      
        return res.render('login',{
            error:'invalid details',
        })
     }


    // **** for statefull authentication******
   //   const sessionid=uuidv4();
   //   setuser(sessionid,User);
   //   res.cookie('uid',sessionid)
   //   return res.redirect('/');

    
     const token=setuser(User);
     res.cookie('uid',token)
     return res.redirect('/');
}

module.exports={handleGenerateNewUSer,handleuserLogin};