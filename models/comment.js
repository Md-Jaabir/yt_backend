const mongoose=require('mongoose');

const commentSchema= mongoose.Schema({
  blogId:{type:String,required:true},
  name:{type:String,required:true},
  comment:{type:String,required:true},
  date:{type:String,required:true}
});

const commentModel=mongoose.model('comment',commentSchema);
module.exports=commentModel;