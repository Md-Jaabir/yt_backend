const express=require('express');
const {publishContact}=require('../controller/user');
const {publishRiview}=require('../controller/user');
const {getRiviews}=require('../controller/user');
const {getBlogs}=require('../controller/user');
const {publishComment}=require('../controller/user');
const {getComments}=require('../controller/user');
const {getVideos}=require('../controller/user');
const router=express.Router();

router.post('/contact',publishContact);
router.post('/publish_riview',publishRiview);
router.get('/riviews',getRiviews);
router.get('/blog_posts',getBlogs);
router.post('/publish_comment',publishComment);
router.get('/comments',getComments);
router.get('/videos',getVideos);

module.exports=router;
