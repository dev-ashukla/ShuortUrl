const express = require('express')
const {handleUserSignUp,
    handleUserLogIn,
} = require('../controllers/users')
const router = express.Router()


router.post('/signup',handleUserSignUp)
router.post('/login',handleUserLogIn)
module.exports = router;