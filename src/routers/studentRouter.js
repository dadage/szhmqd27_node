
const express=require('express');
const path= require('path');
const studentRouter=express.Router();

const studentController=require(path.join(__dirname,'../controllers/studentController'))


studentRouter.get('/list',studentController.getStudentListPage)


module.exports=studentRouter;

