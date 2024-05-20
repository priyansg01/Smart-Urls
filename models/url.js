const mongoose=require("mongoose");
const user=require('../models/user')


const urlschema=new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true,
         },
    redirecturl:{
        type:String,
        required:true,
    },
   
    vistedHistory:[{ timestamp:{type:Number}}],

     
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
         ref:'users',   
     },
   
},{timestamps:true}
);

const URL=mongoose.model("url",urlschema);
module.exports=URL;