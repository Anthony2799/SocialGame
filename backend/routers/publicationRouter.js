const express = require('express');
const publication_Service = require('../services/publication_Services');
const product = new publication_Service();
//midellwar = require('./../middelwares/login'),
rout = express.Router();

rout.get('/login/',async (req, res)=>{
    try{
        let list = await product.find();
        res.json(list);
        
    }catch(err){
        res.json(err)
        console.error(err);
    }
    
    
});

rout.post('/login/',async (req, res)=>{
    try{
        if (await product.create(req.body)){
            res.send("Exit");
        }
        else{
            res.send("Error");
        }

    }catch(err){
        console.error(err);
    }
});

module.exports = rout;