const express=require("express");
const app=express();

const urlRoute=require('./routes/url');
const connectmongo= require("./connection");
const URL=require("./models/url");
const urlencoded=require('body-parser')
const cookieparser=require('cookie-parser')
const staticroute=require('./routes/staticroute');
const userroute=require('./routes/user')
const {restrictToLoggedInUserOnly,checkauth}=require('./middleware/auth')

const PORT=process.env.PORT || 8000;
app.use(express.json());
app.use(cookieparser())
app.set("view engine",'ejs');
//app.set("views",path.resolve('./views'))

app.use(express.static(__dirname+"/public/"));


app.use("/url",restrictToLoggedInUserOnly,urlRoute);
app.use('/', checkauth,staticroute);
app.use('/user',userroute);

app.use(express.urlencoded({extended:false}));

app.get('/test',async(req,res)=>{
    const allurls=await URL.find({})
    return res.render('home',{
        urls:allurls,
    })

})

connectmongo('mongodb://localhost:27017/shorturl')
.then(()=>console.log("mongodb connect"))
.catch(err => console.error("MongoDB connection error:", err));

app.get("/:shortid",async(req,res)=>{
   const shortid=req.params.shortid;
   const entry=await URL.findOneAndUpdate({
      shortid,

   },
   {
    $push:{
        vistedHistory:{
            timestamp:Date.now()      }
    }
   })
   return res.redirect(entry.redirecturl);
}
)

app.listen(PORT,(req,res)=>{
    console.log("server is running");
})


//mongodb://localhost:27017/shorturl
