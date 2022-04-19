const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM animal inner join espece on espece.id = animal.id_espece order by animal.id_espece', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                animal: row
            })
        }
    }
    catch(err)  
    {
        error(err)
    }
}
exports.findAllByID = async(req, res, error) => {
    try{
        const [row] = await db.execute(`SELECT * FROM animal inner join espece on espece.id = animal.id_espece where espece.id = ${req.params.id}`, [req.body]);
        if(row.length > 0)
        {
            return res.json({
                animal: row
            })
        }
    }
    catch(err)  
    {
        error(err)
    }
}

exports.findAnimauxEspece = async(req, res, error) => {
    try{
        const [row] = await db.execute(`SELECT * FROM animal where id_espece = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                animal: row
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}

exports.create = async(req, res, error) => {
    try{
        const [row] = await db.execute('INSERT INTO `animal` (`libelle`, `prenom`, `id_espece`, `id_enclos`) values(?,?,?,?)', [
            req.body.libelle, req.body.prenom, req.body.id_espece, req.body.id_enclos
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"animal créée"
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
        const [row] = await db.execute(`SELECT * FROM animal where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                animal: row[0]
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
        const [row] = await db.execute(`update animal set libelle = ?, prenom = ?, id_espece = ?, id_enclos = ? where id = ?`, [
            req.body.libelle, req.body.prenom, req.body.id_espece, req.body.id_enclos, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"animal modifiée"
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
        const [row] = await db.execute("delete FROM animal where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"animal supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}