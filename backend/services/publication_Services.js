const getConecction = require('./../libs/getConecction');
const uuidv4 = require("uuid");

class Publication_query{

    constructor(){}

    async find(){
        const context = await getConecction();
        const result = await context.query(`SELECT * FROM "Users"."user"`);
        console.log("paso")
        return  await result.rows;
    }

    async findOne(uuid){
        if(uuid != undefined){
            const context = await getConecction();
            const result = await context.query(`SELECT * FROM "Users"."user" where uuid = '${uuid}'`);
            console.log("paso")
            return await result.rows;
        }
        return false;
    }

    async create(data){
        const uuid  = uuidv4.v4();
        data.uuid = uuid;
        let result =this.findOne(data.uuid)
        if (result != null && result != undefined)
            {
                const context = await getConecction();
                const send = await context.query(`INSERT INTO "Users"."user"(
                                                  uuid, name, subname, password, email)
                                                  VALUES ('${data.uuid}', '${data.name}', '${data.subname}', 
                                                  '${data.password}', '${data.email}')`,
                                                  
                                                  (err, req)=>{
                                                    console.log(req)
                                                    console.error(err);
                                                    context.end();
                                                  }); 
                return 'Exito';
                
            }
            return 'Ya hay un cliente con este name';
    }
}

module.exports = Publication_query;