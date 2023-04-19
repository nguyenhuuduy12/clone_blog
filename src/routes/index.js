const newsRoter = require('./news');
const siteRouter = require('./site');
function route(app) {
  app.use('/news', newsRoter);
  app.use('/', siteRouter);
}
module.exports = route;
