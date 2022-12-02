const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1] || ""
    try{
        const varified = jwt.verify(token, process.env.JWT_SECRET)
        req.verifiedUser = varified
        console.log("verificaiton success!")
        next()
    }catch(err){
        console.log("Verification failed ")
        next()
    }
}

module.exports = {authenticate};