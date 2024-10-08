const express=require("express");
const router= express.Router();
const url=require('../models/url')
router.get('/',async(req,res)=>{
    if(! req.user) return res.redirect('/login')
   
    const allurls=await url.find({createdBy:req.user._id});
    console.log(allurls);
    res.render('home',{urls:allurls,user:req.user});
})
// router.get('/',async(req,res)=>{
//     res.render('home');
// })
router.get('/signup',(req,res)=>{
    return res.render('signup');
})

router.get('/login',(req,res)=>{
    return res.render('login');
})
module.exports=router;