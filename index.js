const express = require("express");
const dotenv = require('dotenv');
const app = express();
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const { default: mongoose } = require("mongoose");
dotenv.config({ path: 'config.env' });
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const cors=require("cors");
app.use(cors({origin:"*",methods:["GET","POST","PUT","PATCH"]}));
mongoose.connect(process.env.DB_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("connection successful");
})
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(process.env.PORT);
