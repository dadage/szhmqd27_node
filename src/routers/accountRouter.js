const express=require('express');

const path=require('path');
// 设置路由
const accountRouter=express.Router();
// 导入控制器模块
const accountController=require(path.join(__dirname,"../controllers/accountController"));

accountRouter.get('/register',accountController.getRegisterPage);

// 导出路由对象
module.exports=accountRouter;