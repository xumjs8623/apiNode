const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api');
const blog = require('./routes/blog');
// error handler
onerror(app);

// middlewares
app.use(bodyparser);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
// 主页
app.use(index.routes(), index.allowedMethods());
// 用户数据
app.use(users.routes(), users.allowedMethods());
// api接口
app.use(api.routes(), api.allowedMethods());
// block相关
app.use(blog.routes(), blog.allowedMethods());
module.exports = app;
