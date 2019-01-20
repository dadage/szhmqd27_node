const path=require('path');

exports.getRegisterPage=(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/views/register.html"));
}