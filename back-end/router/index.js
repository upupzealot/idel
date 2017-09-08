'use strict';

const koaRouter = require('koa-router');

module.exports = (app)=>{
  var router = new koaRouter();
 
  router.get('/', async (ctx, next)=>{
    await ctx.render('index'); 
  });

  app.use(router.routes())
}