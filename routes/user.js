const express=require("express");
const router= express.Router();
const {handleGenerateNewUSer,handleuserLogin}=require('../controller/user')

var bodyparser=require('body-parser')
var urlencodedparser = bodyparser.urlencoded({extended:false})


router.post('/',urlencodedparser,handleGenerateNewUSer);
router.post('/login',urlencodedparser,handleuserLogin)




module.exports=router;