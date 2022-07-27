function logError(err, req, res, next){
    console.error(err + ("\n ------------------------- \n"));
    next(err);
}

function errorHandler(err, req, res, next){
    res.status(500).json({
        "mesagge": "Error en el servidor",
        "Error": `${err}`,
    });
}


module.exports = { logError, errorHandler }