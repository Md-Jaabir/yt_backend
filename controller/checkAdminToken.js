const jwt=require('jsonwebtoken');
const cors=require("cors");
app.use(cors({origin:"*",methods:["GET","POST","PUT","PATCH"]}));
async function checkLogin(req,res,next){
  try{
      if(req.headers.authorization){
        let token=req.headers.authorization.replace("Bearer ","");
        jwt.verify(token,process.env.JWT_SECRET,function(err,data){
          if(err){
            res.json({message:"error"});
          }else{
            req.data=data;
            next();
          }
        });
      }else{
        res.json({message:"error",detail:"can't find the token"});
      }
    }catch(err){
    console.log(err);
  }
}

module.exports=checkLogin;
