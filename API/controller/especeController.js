const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM espece', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                espece: row
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
        const [row] = await db.execute('INSERT INTO `espece` (`libelle`, `description`, `image`, `id_pays`) values(?,?,?,?)', [
            req.body.libelle, req.body.description, req.body.image, req.body.id_pays
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"espece créée"
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
        const [row] = await db.execute(`SELECT * FROM espece where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                espece: row[0]
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
        const [row] = await db.execute(`update espece set libelle = ?, description = ?, image = ?, id_pays = ? where id = ?`, [
            req.body.libelle, req.body.description, req.body.image, req.body.id_pays, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"espece modifiée"
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
        const [row] = await db.execute("delete FROM espece where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"espece supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}