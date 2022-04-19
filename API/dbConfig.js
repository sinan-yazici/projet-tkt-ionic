const sql = require('mysql2')

var connexion = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_tkt'
})
.on("error", (err) =>{
    console.log("connexion à échoué")
})

module.exports = connexion;