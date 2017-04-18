var router = require('koa-router')();
var user = require('../controller/blog/userController');
var art = require('../controller/blog/articleController');
router.prefix('/blog');
// 登录接口
router.post('/login', user.login);
// 修改密码接口
router.post('/changePwd',user.changePwd);
// 新增用户接口
router.post('/user/add',user.userAdd);
//删除用户接口
router.post('/user/delete',user.userDelete);
// 用户列表
router.get('/user/list',user.userList);
// 文章分类列表
router.get('/artClassify/list',art.artClassifyList);
// 文章分类添加
router.post('/artClassify/add',art.artClassifyAdd);
// 文章分类删除
router.post('/artClassify/delete');
module.exports = router;