const {Pool} = require('pg'),
config = require('./../../config/default.json'),
host = config['db']["host"],
database = config["db"]["database"],
user =config["db"]["user"],
password = config["db"]["password"];

async function getConecction(){
    const pool =  new Pool({
        host: host,
        database: database,
        user:user,
        password: password,
        
    });
    await pool.connect();
    return pool;
}



module.exports = getConecction;