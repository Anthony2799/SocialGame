function validateUser(data){
    const {name, subname, password, email} = data;
    if(typeof name !== string && name.length > 50)
    {
        return new Error('Error en la informacion del nombre')    
    }
    if(typeof subname !== string && name.length > 50)
    {
        return new Error('Error en la informacion del apellido')    
    }
    if(typeof password !== string)
    {
        return new Error('Error en la informacion en la constraseña')    
    }
    if(typeof email !== string && name.length > 100)
    {
        return new Error('Error en la informacion en el email')    
    }
    
}


module.exports = {
    validateUser,
};