const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT alerte.id, libelle, description, localisation, gravite, nom, prenom FROM alerte inner join user on id_user = user.id order by gravite desc', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                alerte: row
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
        const [row] = await db.execute('INSERT INTO `alerte` (`libelle`, `description`, `localisation`, `gravite`, `id_user`) values(?,?,?,?,?)', [
            req.body.libelle, req.body.description, req.body.localisation, req.body.gravite, req.body.id_user   
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"alerte créée"
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
        const [row] = await db.execute(`SELECT * FROM alerte where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                alerte: row
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
        const [row] = await db.execute(`update alerte set libelle = ?, description = ?, localisation = ?, gravite = ? where id = ?`, [
            req.body.libelle, req.body.description, req.body.localisation, req.body.gravite, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"alerte modifiée"
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
        const [row] = await db.execute("delete FROM alerte where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"alerte supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}