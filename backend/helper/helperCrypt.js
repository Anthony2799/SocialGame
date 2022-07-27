const bcryptjs  = require('bcryptjs');

const encrypt = async (textPlain)=>{
    const hash = await bcryptjs.hash(textPlain, 10);
    return hash;
}

const compare = async (passwordNatural, hashPassword)=>{
    if(bcryptjs.compareSync(passwordNatural, hashPassword)){
        return true
    }else{
        return false
    }
    
    return valides;
}
module.exports = { encrypt, compare};