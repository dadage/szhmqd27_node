const express=require('express');

const path=require('path');
// 设置路由
const accountRouter=express.Router();
// 导入控制器模块
const accountController=require(path.join(__dirname,"../controllers/accountController"));
// 前往注册页面
accountRouter.get('/register',accountController.getRegisterPage)
// 获取注册页面
accountRouter.post('/register',accountController.register)
// 获取登录页面
accountRouter.get('/login',accountController.getLoginPage)
// 获取登录验证码
accountRouter.get('/vcode',accountController.getVcodeImage)
// 获取登录的验证
accountRouter.post('/login',accountController.login)

// 导出路由对象
module.exports=accountRouter