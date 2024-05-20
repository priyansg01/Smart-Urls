const express=require("express");

const {handleGenerateNewShortURl,handlegetanalytics}=require('../controller/url')
const router= express.Router();

var bodyparser=require('body-parser')
var urlencodedparser = bodyparser.urlencoded({extended:false})

router.post("/",urlencodedparser,handleGenerateNewShortURl);

router.get("/analytic/:id",handlegetanalytics)
module.exports=router;