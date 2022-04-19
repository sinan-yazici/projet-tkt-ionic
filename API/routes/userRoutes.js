const express = require('express')
const router = express.Router()
const {findAll, create, findById, update, drop} = require('../controller/userController')

router.get("/users", findAll)
router.post("/user", create)
router.get("/user/:id", findById)
router.put("/user/:id", update)
router.delete("/user/:id", drop)

module.exports = router;