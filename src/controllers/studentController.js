const path = require('path');

const databasetools = require(path.join(__dirname, '../tools/databasetools'));

const template = require('art-template');



exports.getStudentListPage = (req, res) => {
    const keyword = req.query.keyword || "";
    databasetools.find('studentInfo', {
        name: {
            $regex: keyword
        }
    }, (err, docs) => {
        // 使用arttemplate模板渲染页面
        const html = template(path.join(__dirname, '../public/views/list.html'), {
            student: docs,
            keyword
        });
        res.send(html);
    })



}