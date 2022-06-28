const express = require('express');
const app = express();
const rout = require('./routers/index');
const cors = require('cors');
const body_parser = require('body-parser');

app.use(cors());
app.use(body_parser.urlencoded({ extended: false}));
app.use(body_parser.json());
app.use('/hey',(req,res)=>{
    res.send('estoy aca');
})
app.listen(8080,(req, res)=>{
    console.log('esta corriendo');
})

rout(app);

