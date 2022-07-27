const express = require('express'),
router = express.Router(),
{ compare} = require('./../helper/helperCrypt'),
Login_query = require('./../services/login_Services'),
login = new Login_query(),
{generateAccessToken, generateRefreshToken} = require('./../helper/tockens');
const users = [];

router.get('/login/',async (req,res,next)=>{
    const user = await login.findOne(req.body.name);
    let pass =req.body.password;
    pass = pass + '';
    if(user == null){
        return res.status(404).send("No existe este user, registrece porfavor.")
    }

    if(pass != null || pass != undefined && user.password != null){
        user.password.split(' ');
        let verificacion =  await compare(pass, user.password);
        if(verificacion){
            const accessToken = generateAccessToken({user: req.body.name});
            const refreshToken = generateRefreshToken({user: req.body.name});

            res.json({accessToken: accessToken, refreshToken: refreshToken});
        }
        else{
            
            res.status(401).send("Error in the password");
        }
    }
});

module.exports = router;