var router = require('koa-router')();
// 设置路由前缀
router.prefix('/api');
router.get('/',(ctx,next) => {
  ctx.body = {id:1};
});
module.exports = router;