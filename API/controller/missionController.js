const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM mission', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                mission: row
            })
        }
    }
    catch(err)  
    {
        error(err)
    }
}

exports.findinfosMission = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT mission.id, mission.libelle as libelle_mission, valider, commentaire, id_user, id_animal, mission.id_enclos, user.nom as nom_user, user.prenom as prenom_user, sexe, animal.prenom as prenom_animal, id_espece, enclos.libelle, emplacement, date FROM mission inner join user on user.id = id_user LEFT join animal on id_animal = animal.id LEFT join enclos on mission.id_enclos = enclos.id', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                mission: row
            })
        }
    }
    catch(err)  
    {
        error(err)
    }
}

exports.create = async(req, res, error) => {
    try{
        const [row] = await db.execute('INSERT INTO `mission` (`libelle`, `valider`, `commentaire`, `id_user`, `id_animal`, `id_enclos`, `date`) values(?,?,?,?,?,?,?)', [
            req.body.libelle, req.body.valider, req.body.commentaire, req.body.id_user, req.body.id_animal, req.body.id_enclos, req.body.date
        ]);
        if(row.affectedRows === 1)// verifier vide donc 0
        {
            return res.status(201).json({
                message:"mission créée"
            })
        }
    }
    catch(err)
    {
        error(err);
    }

}
exports.findById = async(req, res, error) => {
    try{
        const [row] = await db.execute(`SELECT * FROM mission where id = ${req.params.id} `)
        if(row.length > 0)// verifier vide donc 0
        {
            return res.json({
                mission: row[0]
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}
exports.update = async(req, res, error) => {
    try{
        const [row] = await db.execute(`update mission set libelle = ?, valider = ?, commentaire = ?, id_user = ? where id = ?`, [
            req.body.libelle, req.body.valider, req.body.commentaire, req.body.id_user, req.params.id
        ])
        if(row.affectedRows === 1)// verifier vide donc 0
        {
            return res.status(201).json({
                message:"mission modifiée"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}
exports.drop = async(req, res, error) => {
    try{
        const [row] = await db.execute("delete FROM mission where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)// verifier vide donc 0
        {
            return res.status(201).json({
                message:"mission supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}
exports.findByIdUser = async(req, res, error) => {
    try{
        const [row] = await db.execute(`SELECT * FROM mission where id_user = ${req.params.id} `)
        if(row.length > 0)// verifier vide donc 0
        {
            return res.json({
                mission: row
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}

exports.updateValider = async(req, res, error) => {
    try{
        const [row] = await db.execute(`update mission set valider = ?, commentaire = ? where id = ?`, [
            req.body.valider, req.body.commentaire, req.params.id
        ])
        if(row.affectedRows === 1)// verifier vide donc 0
        {
            return res.status(201).json({
                message:"mission modifiée"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}
