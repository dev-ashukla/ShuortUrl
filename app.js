const express = require('express')
const app = express()
const path = require('path')
// const {connectMongodb} = require('./connection')
const PORT = process.env.PORT
const cookieParser = require('cookie-parser')

const {restrictToLoggedInUserOnly,
checkAuth } = require('./middlewares/restrictToLoggedIn')

const urlRoute = require('./routes/urls')
const staticRoute = require('./routes/staticroutes')
const userRoute = require('./routes/users')

// connectMongodb('mongodb://127.0.0.1:27017/short-url')

// setting the view engine to EJS
app.set('view engine', 'ejs')
app.set("views",path.resolve('./views'))



app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use('/url',restrictToLoggedInUserOnly,urlRoute)
app.use('/',checkAuth,staticRoute)
app.use('/user',userRoute)

// app.listen(PORT,()=> console.log(`app started at http://localhost:${PORT}`))

module.exports = app