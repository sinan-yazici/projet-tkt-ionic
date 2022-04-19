const express = require('express')
const router = express.Router()
const {findAll, create, findById, findByIdEspece, update, drop} = require('../controller/infoController')

router.get("/infos", findAll)
router.post("/info", create)
router.get("/info/:id", findById)
router.get("/infoespece/:id", findByIdEspece)
router.put("/info/:id", update)
router.delete("/info/:id", drop)

module.exports = router;