const express = require('express')
const router = express.Router()
const {findAll, create, findById, update, drop} = require('../controller/especeController')

router.get("/especes", findAll)
router.post("/espece", create)
router.get("/espece/:id", findById)
router.put("/espece/:id", update)
router.delete("/espece/:id", drop)

module.exports = router;