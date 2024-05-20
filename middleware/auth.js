const {getuser}=require('../service/auth')

async function restrictToLoggedInUserOnly(req,res,next){
    const userID=req.cookies.uid;
    if(!userID) return res.redirect('/login')

    const user=await getuser(userID)
    if(!user) return res.redirect('/login')
  
    req.user=user;
    next()

}

async function checkauth(req,res,next){
    const userID=req.cookies.uid;
  

    const user=await getuser(userID)

  
    req.user=user;
    next()

}


module.exports={restrictToLoggedInUserOnly,checkauth}