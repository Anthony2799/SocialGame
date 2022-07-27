const express = require('express');
const user_Service = require('../services/user_Services'),
client = new user_Service(),
{ validateUser } = require('./../services/validate');
rout = express.Router();

rout.use('/Verification',async (req, res, next)=>{
    if(validateUser){

    }
    next();
});


rout.post('/createU',async (req, res, next)=>{
    try{
        const conect = await client.create(req.body)
        if (conect == true){
            res.status(201).json({
                                    "menssage" :"Exit",
                                    "name": `${req.body.name}`,
                                    "subname": `${req.body.subname}`,
                                    "email": `${req.body.email}`
                                });
        }
        else{
            res.status(500).send("Error");
            next()
        }

    }catch(err){
        
        console.error(err);
        res.status(500).send('Error en el servidor');
        next(err)
    }
});

module.exports = rout;