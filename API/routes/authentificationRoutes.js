const express = require('express')
const router = express.Router()
const {login} = require('../controller/loginController')
const {register} = require('../controller/registerController')

router.post("/login", login)
router.post("/register", register)

module.exports = router;