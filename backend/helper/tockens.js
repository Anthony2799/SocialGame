const jwt = require("jsonwebtoken");

function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESO_TOKEN_SECRETO, {expiresIn: "15m"});
}

let refreshTokens = [];

function generateRefreshToken(user){
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
    refreshTokens.push(refreshToken);
    return refreshToken;
}

module.exports = {generateAccessToken, generateRefreshToken};