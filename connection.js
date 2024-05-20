const mongoose=require('mongoose');
mongoose.set("strictQuery",true);

async function connectmongo(url){
    return await mongoose.connect(url);
}
module.exports=connectmongo;