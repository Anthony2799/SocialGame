const jwt = require('jsonwebtoken'),
getConecction = require('./../libs/getConecction');

class Login_query{

    constructor(){}

    async findOne(n){
        try{
            const context = await getConecction();
            const verificacion = await context.query(`SELECT * FROM "Users"."user" WHERE "Users"."user"."name" = '${n}'`);
            return verificacion.rows.pop();
        }catch(err){
            return err.menssage;
        }
        
    }



}

module.exports = Login_query;



