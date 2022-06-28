const bcryptjs = require('bcryptjs');

const encrypt = async (textPlain)=>{
    const hash = await bcryptjs.hash(textPlain, 10);
    return hash;
}

const compare = async (passwordNatural, hashPassword)=>{
    return await bcryptjs.compare(passwordNatural, hashPassword);
}

module.exports = { encrypt, compare};