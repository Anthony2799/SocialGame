const express = require('express'),
app = express();
const rout = require('./publicationRouter'),
user = require('./userRouter');
const login = require('./loginRouter');

function getRouter(app){
    const router = express.Router();
    app.use('/app/v1',router);
    router.use('/login',login);
    router.use('/user', user)
    router.use('/list_Publications',rout);
}

module.exports = getRouter;