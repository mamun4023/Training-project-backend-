const jwt = require('jsonwebtoken');

const CreateJwtToken = user =>{
    return jwt.sign({user}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRE_IN
    })
}


module.exports =  {CreateJwtToken} 