const express = require('express')
const router = express.Router()
const {handleNewUrlGenerator,
    handleRedirection,
} = require('../controllers/urls')

router.get('/:shortId',handleRedirection)
router.post('/',handleNewUrlGenerator)


module.exports = router

