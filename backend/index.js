//I import packages
const { json } = require('body-parser');
const path = require('path');
const express = require('express'),
pg = require('pg'),
app = express(),
session = require('express-session'),
rout = require('./routers/index'),
cors = require('cors'),
config = require('./../config/default.json'),
body_parser = require('body-parser'),
env = require('dotenv').config(),
{ logError, errorHandler} = require('./middelwares/errorM');

//add config of server
app.use(cors());
app.use(express.json())
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false}));

app.listen(8080,(req, res)=>{
    console.log('esta corriendo');
})

//Add routers
rout(app);

//Add Error router
app.use(logError);
app.use(errorHandler);

