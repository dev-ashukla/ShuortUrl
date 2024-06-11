const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY
function setUser(user){
    return jwt.sign({
        _id : user._id,
        email : user.email
    },secretKey, {expiresIn : '1hr'})
}

function getUser(token ){
    if(!token) return null
    try{
        return jwt.verify(token, secretKey)
    }
    catch{
        return null
    }
}

module.exports = {
    setUser,
    getUser,
}