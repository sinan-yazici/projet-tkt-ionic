const express = require('express')
const router = express.Router()
const {findAll, create, findById, update, drop} = require('../controller/enclosController')

router.get("/les-enclos", findAll)
router.post("/enclos", create)
router.get("/enclos/:id", findById)
router.put("/enclos/:id", update)
router.delete("/enclos/:id", drop)

module.exports = router;