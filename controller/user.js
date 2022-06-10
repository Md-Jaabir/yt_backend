let contactModel=require('../models/contact');
let riviewModel=require('../models/riview');
let blogModel=require('../models/blog');
let videoModel=require('../models/video');
let commentModel=require('../models/comment');

async function publishContact(req,res){
  try{
    let newContactObj=new contactModel({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      description:req.body.description
    });
  
    let savedContactObj= await newContactObj.save();
    res.jspn({message:"successs",savedObj:savedContactObj});
  }catch(err){
    console.log(err);
    res.status(404).json({error:"error_sending"});
  }
}

async function publishRiview(req,res){
  try{
    let newRiview = new riviewModel({
      name:req.body.name,
      stars:req.body.stars,
      description:req.body.description
    });
    console.log(newRiview);
    let savedRiview=await newRiview.save();
    res.json({message:"success",riview:savedRiview});
  }catch(err){
    console.log(err);
  }
  
}

async function getRiviews(req,res){
  let allRiviews=await riviewModel.find(req.query);
  res.json(allRiviews);
}

async function getBlogs(req,res){
  try{
    let blogs=await blogModel.find(req.query);
    res.json(blogs);
  }catch(err){
    console.log(err);
  }
}

async function publishComment(req,res){
  try{
    let newComment=new commentModel({
      blogId:req.body.blogId,
      name:req.body.name,
      comment:req.body.comment,
      date:req.body.date
    });
    let savedComment=await newComment.save();
    res.json({message:"success",insetedComment:savedComment});
  }catch(err){
    console.log(err);
  }
}

async function getComments(req,res){
  try{
    let comments=await commentModel.find(req.query);
    res.json(comments);
  }catch(err){
    console.log(err);
  }
}

async function getVideos(req,res){
  try{
    let videos=await videoModel.find(req.query);
    res.json(videos);
  }catch(err){
    console.log(err);
  }
}

module.exports={
  publishContact,
  publishRiview,
  getRiviews,
  getBlogs,
  publishComment,
  getComments,
  getVideos
}
