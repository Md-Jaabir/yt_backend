const contactModel=require('../models/contact');
const adminModel=require('../models/admin');
const blogModel=require('../models/blog');
const videoModel=require('../models/video');
const jwt = require('jsonwebtoken');

async function viewContactMsgs(req,res){
  let msgs=await contactModel.find();
  res.json(msgs);
}

async function handleAdminLogin(req,res){
  try{
    let searchedAdmin=await adminModel.findOne({userId:req.body.userId});
    console.log(searchedAdmin);
    if(searchedAdmin){
      if(searchedAdmin.password==req.body.password){
        let token= jwt.sign({userId:searchedAdmin.userId,name:searchedAdmin.name},process.env.JWT_SECRET);
        res.json({message:"success",token:token});
      }else{
        res.json({message:"error"});
      } 
    }else{
      res.json({message:"error"});
    }  
  }catch(err){
    console.log(err);
  }

}

async function publishBlog(req,res){
  try{
    const newBlog=new blogModel({
      title:req.body.title,
      coverImageUrl:req.body.coverImageUrl,
      content:req.body.content
    });
    let savedBlog=await newBlog.save();
    res.json({message:"success",insertedBlog:savedBlog});
  }catch(err){
    console.log(err);
  }
  
}

async function updateBlog(req,res){
  try{
    const blogId=req.body.id;
    const updatedBlogObj={
      title:req.body.title,
      coverImageUrl:req.body.coverImageUrl,
      content:req.body.content
    }
    let updatedBlog=await blogModel.findOneAndUpdate({_id:blogId},updatedBlogObj);
    res.json({message:"success",updatedBlog:updatedBlog});
  }catch(err){
    console.log(err);
  }
}

async function deleteBlog(req,res){
  try{
    let blogId=req.body.id;
    let deletedBlog=await blogModel.findOneAndDelete({_id:blogId});
    res.json({message:"success",deletedBlog:deletedBlog});
  }catch(err){
    console.log(err);
  }
}

async function deleteContact(req,res){
  let contactId= req.body.contactId;
  let deletedContact=await contactModel.findOneAndDelete({_id:contactId});
  res.json({message:"success",deletedContact:deletedContact});
}

async function updateAdminInfo(req,res){
  try{
    let updatedInfo={
      name:req.body.name,
      userId:req.body.userId,
      password:req.body.password
    }
    let updatedAdmin= await adminModel.findOneAndUpdate({_id:"629888a62a95401c1da8e47d"},updatedInfo);
    res.json({message:"success",updateAdminInfo:updatedAdmin});
  }catch(err){
    console.log(err);
  }
}

async function addVideo(req,res){
  try{
    let newVideo=new videoModel({
      title:req.body.title,
      thumbUrl:req.body.thumbUrl,
      videoUrl:req.body.videoUrl
    });
    let savedVideo=await newVideo.save();
    res.json({message:"success",savedVideo:savedVideo})
  }catch(err){
    console.log(err);
  }
}

async function deleteVideo(req,res){
  try{
    let videoId=req.body.videoId;
    let deletedVideo=await videoModel.findOneAndDelete({_id:videoId});
    res.json({message:"success",deletedVideo});
  }catch(err){
    console.log(err);
  }
}


module.exports={
  viewContactMsgs,
  handleAdminLogin,
  publishBlog,
  updateBlog,
  deleteBlog,
  deleteContact,
  updateAdminInfo,
  addVideo,
  deleteVideo
}
