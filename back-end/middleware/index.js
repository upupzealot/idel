'use strict';

const config = require('../../config');

module.exports = (app)=>{
  app.use(async (ctx, next)=>{
    ctx.state.config = config;

    ctx.state.css = (href)=>{
      return `<link rel="stylesheet" type="text/css" href="${href}">`;
    }

    ctx.state.js = (src)=>{
      return `<script type="text/javascript" src="${src}"></script>`;
    }

    await next();
  });
}
