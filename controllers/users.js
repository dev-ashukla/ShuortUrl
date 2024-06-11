const Users = require('../models/users')
const {setUser} = require('../service/auth')

async function handleUserSignUp(req,res){
    const {name, email, password} = req.body;
    if(!name || !email || !password) return res.json({msg:"all fields are required!"})
    await Users.create({
    name ,
    email,
    password})
    return res.render('home')
}

async function handleUserLogIn(req,res){
    const {email, password} = req.body;
    if(!email || !password) return res.json({msg:"all fields are required!"})
    const user = await Users.findOne({email : email})
    if(!user) {
        return res.status(401).json({error : 'Invalid email and password'}).render('login')
    }
    const token = setUser(user)
    res.cookie("uid",token)
    return res.redirect('/')
}


module.exports = {
    handleUserSignUp,
    handleUserLogIn
}