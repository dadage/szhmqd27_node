const path = require('path');
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'szhm27q';
const captchapng = require('captchapng');
const databasetools=require(path.join(__dirname,'../tools/databasetools'))


exports.getRegisterPage = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/register.html"));
}

exports.register = (req, res) => {
    // 判断是否存在用户
    const {username} = req.body;
    console.log(req.body);
    const result={
        status:0,
        message:"注册成功"
    }
    databasetools.findOne('accountInfo',{username},(err,doc)=>{
        if(doc){
            result.status=1;
            result.message="该用户已经被注册";
            res.json(result);
        }else {
            // 增加一个用户
            databasetools.insertOne('accountInfo',req.body,(err,result2)=>{
                if(result2){
                    res.json(result2);
                }else{
                    alert('注册失败');
                }
            })
        }
    })
}

exports.getLoginPage=(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/views/login.html'));
}
exports.getVcodeImage=(req,res)=>{
    const vcode=parseInt(Math.random()*9000+1000);
    req.session.vcode= vcode;
    console.log(vcode);
    const p = new captchapng(80,30,vcode); // width,height,numeric captcha
         p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
        p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
 
        const img = p.getBase64();
        const imgbase64 =Buffer.from(img,'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png'
        });
        res.end(imgbase64);
}

exports.login=(req,res)=>{
    const result={
        status:0,
        message:"登录成功"
    }
    console.log(req.session.vcode);
    const {username,password,getVcode}=req.body;
    if(req.session.vcode!=getVcode){
        result.status=1;
        result.message="验证码错误";
        res.json(result);
    }else {

        databasetools.findOne('accountInfo',{username},(err,doc)=>{
            if(doc){
                if(doc.password==password){
                    res.json(result);
                    
                }else {
                    result.status=3;
                    result.message="密码错误，请重新输入";
                    res.json(result);
                }
            }else{
                result.status=2;
                result.message="您还未注册，请注册后登录";
                res.json(result);
            }
        })
    }
    
    
}



