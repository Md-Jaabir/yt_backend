const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
  name:{required:true,type:String},
  email:{required:true,type:String},
  phone:{required:true,type:String},
  description:{required:true,type:String}
});

const contacts=mongoose.model('contact',contactSchema);
module.exports=contacts;
