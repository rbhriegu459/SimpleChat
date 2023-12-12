const express = require('express');
const loginPage = require('./routes/login');
const messagePage = require('./routes/message');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(loginPage);
app.use(messagePage);

app.use((req, res, next) =>{
    res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(4000);