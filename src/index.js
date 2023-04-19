const morgan = require('morgan');
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;
const route = require('./routes/index');
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// httploger
app.use(morgan('combined'));
// teamplate engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resuorces/views'));
//route init
route(app);
// app.get('/', (req, res) => {
//     res.render('home');
// })
// // app.get('/news', (req, res) => {
// //     res.render('news');
// // })
// app.get('/search', (req, res) => {
//     res.render('search');
// })
// app.post('/search', (req, res) => {
//     res.render('search');
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
