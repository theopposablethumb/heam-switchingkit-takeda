const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const routes = require('./routes');
const navigation = require('./util/navigation');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet.referrerPolicy({policy: 'no-referrer-when-downgrade'}));
app.use(routes);

app.use((req, res, next) => {
  res.status(404).render('404', {
    docTitle: 'Page not found',
    path: '404',
    menu: navigation.defaultNav,
  });
})

app.listen(PORT);