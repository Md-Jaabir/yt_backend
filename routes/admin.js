const express=require('express');
const {viewContactMsgs}=require('../controller/admin');
const {handleAdminLogin}=require('../controller/admin');
const {publishBlog}=require('../controller/admin');
const {updateBlog}=require('../controller/admin');
const {deleteBlog}=require('../controller/admin');
const {deleteContact}=require('../controller/admin');
const {updateAdminInfo}=require('../controller/admin');
const {addVideo}=require('../controller/admin');
const {deleteVideo}=require('../controller/admin');
const checkLogin=require('../controller/checkAdminToken');
const router=express.Router();
router.get('/contact_msgs',checkLogin,viewContactMsgs)
router.post('/login',handleAdminLogin);
router.post('/publish_blog',checkLogin,publishBlog);
router.post('/update_blog',checkLogin,updateBlog);
router.post('/delete_blog',checkLogin,deleteBlog);
router.post('/delete_contact',checkLogin,deleteContact);
router.post('/update_info',checkLogin,updateAdminInfo);
router.post('/add_video',checkLogin,addVideo);
router.post('/delete_video',checkLogin,deleteVideo);

module.exports=router;
