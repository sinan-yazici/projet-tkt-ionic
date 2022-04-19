const express = require('express')
const router = express.Router()
const {findAll, create, findAnimauxEspece, findById, update, drop, findAllByID} = require('../controller/animalController')

router.get("/animaux", findAll)
router.get("/espece/animal/:id", findAllByID)
router.get("/animauxespece/:id", findAnimauxEspece)
router.post("/animal", create)
router.get("/animal/:id", findById)
router.put("/animal/:id", update)
router.delete("/animal/:id", drop)

module.exports = router;