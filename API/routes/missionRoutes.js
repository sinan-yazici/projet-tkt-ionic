const express = require('express')
const router = express.Router()
const {findAll, create, findById,findinfosMission, update, drop, findByIdUser, updateValider} = require('../controller/missionController')

router.get("/missions", findAll)
router.get("/missionsinfos", findinfosMission)
router.post("/mission", create)
router.get("/mission/:id", findById)
router.put("/mission/:id", update)
router.delete("/mission/:id", drop)
router.get("/missions/user/:id", findByIdUser)
router.put("/missions/valider/:id", updateValider)

module.exports = router;