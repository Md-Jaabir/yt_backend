const mongoose=require('mongoose');

const videoSchema= mongoose.Schema({
  title:{type:String,required:true},
  thumbUrl:{type:String,required:true},
  videoUrl:{type:String,required:true}
});

const videoModel=mongoose.model('video',videoSchema);
module.exports=videoModel;