const express = require('express'),
app = express();
const rout = require('./publicationRouter');
const login = require('./../middelwares/login');

function getRouter(app){
    const router = express.Router();
    app.use('/app/v1',router);
    router.use('/login',login)
    router.use('/list_Publications',rout);
}

module.exports = getRouter;