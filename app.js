const express = require('express');
const app = express();
const path = require('path');
require('./db/connection');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const User = require('./models/user');

app.use(
  '/css',
  express.static(path.join(__dirname, './node_modules/bootstrap/dist/css'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, './node_modules/bootstrap/dist/js'))
);
app.use(
  '/jq',
  express.static(path.join(__dirname, './node_modules/jquery/dist'))
);
// app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  //   res.send('start ...');
  const users = await User.find({});

  res.render('index', { users });
});

app.get('/contact', (req, res) => {
  //   res.send('start ...');
  res.render('contact');
});

app.post('/contact', async (req, res) => {
  //   res.send('start ...');
  const { password, username } = req.body;
  //   console.log(req.body);
  const user = new User({
    password,
    username,
  });

  await user.save();

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`at http://localhost:${port}/`);
});
