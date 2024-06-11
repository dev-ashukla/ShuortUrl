const express = require('express')
const Url = require('../models/urls')
const router = express.Router()

router.get('/',async (req,res)=>{
    if(!req.user) return res.redirect('/login')
    const allUrls = await Url.find({createdBy : req.user._id})
    return res.render('home', {
        urls: allUrls, // Pass the `urls` variable to the home.ejs template
    });
})

router.get('/signup', (req,res)=>{
    return res.render('signup')
})

router.get('/login', (req,res)=>{
    return res.render('login')
})
module.exports = router