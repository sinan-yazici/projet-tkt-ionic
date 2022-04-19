const express = require("express") //librairie express
const app = express()
const cors = require("cors")

const routeMission = require('./routes/missionRoutes')//aller dans le fichier
const routeAnimal = require('./routes/animalRoutes')
const routeAlerte = require('./routes/alerteRoutes')
const routeEnclos = require('./routes/enclosRoutes')
const routePays = require('./routes/paysRoutes.js')
const routeEspece = require('./routes/especeRoutes.js')
const routeInfo = require('./routes/infoRoutes.js')
const routeSante = require('./routes/santeRoutes.js')
const routeUser = require("./routes/userRoutes.js")
const routeAuth = require('./routes/authentificationRoutes.js')

app.use(express.json())//res en json
app.use(express.urlencoded({extends: true}))

app.use(cors( {
    origin:'http://localhost:3000'
}));

app.use(routeMission)//utilise mission
app.use(routeAnimal)
app.use(routeAlerte)
app.use(routeEnclos)
app.use(routePays)
app.use(routeEspece)
app.use(routeInfo)
app.use(routeSante)
app.use(routeUser)
app.use(routeAuth)

app.listen(3000, () => {
    console.log("server ouvert");//ouvrir server
})
