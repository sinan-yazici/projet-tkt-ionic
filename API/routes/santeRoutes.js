const express = require('express')
const router = express.Router()
const {findAll, create, findById, update, drop} = require('../controller/santeController')

router.get("/santes", findAll)
router.post("/sante", create)
router.get("/sante/:id", findById)
router.put("/sante/:id", update)
router.delete("/sante/:id", drop)
// router.post("/sante-test", addSante)

module.exports = router;