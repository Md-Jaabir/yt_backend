const mongoose=require('mongoose');

const riviewSchema= mongoose.Schema({
  name:{type:String,required:true},
  stars:{type:String,required:true},
  email:{type:String,required:true},
  description:{type:String,required:true}
})

const riviewModel=mongoose.model('riview',riviewSchema);
module.exports=riviewModel;
