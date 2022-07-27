const getConecction = require('./../libs/getConecction'),
uuidv4 = require("uuid"),
{ encrypt } = require("./../helper/helperCrypt"),
validation = require('validator');

class User_query{

    constructor(){}

    async find(){
        const context = await getConecction();
        const result = await context.query(`SELECT * FROM "Users"."user"`);
        return  await result.rows;
    }

    async findOne(uuid){
        if(uuid != undefined){
            const context = await getConecction();
            const result = await context.query(`SELECT * FROM "Users"."user" where uuid = '${uuid}'`);
            return await result.rows;
        }
        return false;
    }

    async create(data){
        try{
            const uuid  = uuidv4.v4();
            data.uuid = uuid;
            let result =this.findOne(data.uuid)
            if(data.password != null){
                data.password = await encrypt(data.password);
            }else{
                return "Fallo"
            }
            if (result != null && result != undefined)
                {
                    const context = await getConecction();
                    const send = await context.query(`INSERT INTO "Users"."user"(
                                                    uuid, name, subname, password, email)
                                                    VALUES ('${data.uuid}', '${data.name}', '${data.subname}', 
                                                    '${data.password}', '${data.email}')`,
                                                    (err, req)=>{
                                                        return err;
                                                    }); 
                    context.end();
                    return true;
                }
        }catch(err){
            return err;
        }

            return false;
    }

    async validation(data){
        if(objectReq.uuid != undefined ){
            return res.status(401).send("Error al enviar la informacion");
        }
        if( validation.isEmail(data.email)|| 
            data.name.length > 50 || 
            objectReq.subname.length > 50 ||
            objectReq.password.length > 50){
            return res.status(401).send("Informacion invalida");
        }
    }

}

module.exports = User_query;