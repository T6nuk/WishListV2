const express = require('express');
const ejs = require('ejs');
require('./models/db');


const mainPage = require('./routes/main');
const adminPage = require('./routes/admin');
const errorPage = require('./routes/error');
const randomPage = require('./routes/random');

const app = express();


app.set('view engine', ejs);
app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.urlencoded({extended: true}));



app.use(mainPage);
app.use(adminPage);
app.use(randomPage);
app.use(errorPage);



app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started.");
});

