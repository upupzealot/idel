'use strict';

const path = require('path');
const koa = require('koa');
const koaEjs = require('koa-ejs');
const koaStatic = require('koa-static');

const config = require('../config');
const middleware = require('./middleware');
const router = require('./router');

// app
const app = new koa();

// static
app.use(koaStatic(path.resolve(__dirname, './public')));
app.use(koaStatic(path.resolve(__dirname, '../front-end/dist')));

// view
koaEjs(app, {
  root: path.resolve(__dirname, './view'),
  layout: 'layout',
  viewExt: 'ejs',
});

// middleware
middleware(app);

// router
router(app);

// start server
app.listen(config.port);
console.log(`started at: http://localhost:${config.port}`);
