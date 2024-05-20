const generateShortId = require('ssid');

const url=require('../models/url');
const { urlencoded } = require('express');

const handleGenerateNewShortURl = async (req, res) => {
    const body = req.body;
    if (!req.body.url) return res.status(400).json({ error: "URL is required" });
 
    const shortid = generateShortId();
    await url.create({
        shortid: shortid,
        redirecturl: body.url, // Access 'url' field from the request body
        visitedHistory: [],
     
        createdBy:req.user._id,
    });
   
    return res.render('home',{id:shortid})
   // return res.json({ id: shortid });
};

// const handleGenerateNewShortURl=async(req,res)=>{
//     const body=req.body;
//     console.log(body);
//     if(!body.url) return res.status(400).json({error:"url is required"});

//    const shortid=generateShortId();
//     await url.create({
//         shortid:shortid,
//         redirecturl:body.url,
//         visitedHistory:[],
//     });
//    //return res.render('home',{id:shortid})
//     return res.json({id:shortid});

// }



const handlegetanalytics=async(req,res)=>{
   const shortid=req.params.id;
   const result=await url.findOne({shortid})
   return res.json({totalclicks:result.vistedHistory.length,analytics:result.vistedHistory})

}

module.exports={handleGenerateNewShortURl,handlegetanalytics};