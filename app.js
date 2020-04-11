const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { admin, courses } = require('./routes/admin');
const user = require('./routes/user');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))



app.use('/admin', admin);
app.use('/users', user);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

// npm start
// npm run start-server


