const express = require('express')
const router = express.Router()
const {findAll, create, findById, update, drop} = require('../controller/paysController')

router.get("/les-pays", findAll)
router.post("/pays", create)
router.get("/pays/:id", findById)
router.put("/pays/:id", update)
router.delete("/pays/:id", drop)

module.exports = router;