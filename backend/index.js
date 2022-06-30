const path = require('path');

//I import packages
const express = require('express'),
pg = require('pg'),
app = express(),
session = require('express-session'),
rout = require('./routers/index'),
cors = require('cors'),
config = require('./../config/default.json'),
body_parser = require('body-parser');

//add config of server
app.use(cors());
app.use(session({
    secret : config.DateSecret.secret,
    resave : true,
    saveUninitialized : true
}))
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'static')));

//Init Server
app.use('/',(req,res)=>{
    res.status(200).send(`I'm running`);
})

app.listen(8080,(req, res)=>{
    console.log('esta corriendo');
})

//Add routers
rout(app);

