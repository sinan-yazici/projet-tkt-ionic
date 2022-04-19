const express = require('express')
const router = express.Router()
const {findAll, create, findById, update, drop} = require('../controller/alerteController')

router.get("/alertes", findAll)
router.post("/alerte", create)
router.get("/alerte/:id", findById)
router.put("/alerte/:id", update)
router.delete("/alerte/:id", drop)

module.exports = router;