const express = require('express'),
app = express();



const verificacion = {
    isLoggedIn : function (req, res, next)
                {
                    if (req.user) return next();
                    res.redirect('/');
                }
    
}

module.exports = verificacion;