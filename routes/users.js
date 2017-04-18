var router = require('koa-router')();

router.prefix('/users');

router.get('/', function (ctx, next) {
  console.log(ctx.query);
  ctx.body = {id: 1};
  // await ctx.render('index', {title: '111'});
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;
