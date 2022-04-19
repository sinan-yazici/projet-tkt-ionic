const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM infos', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                infos: row
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
        const [row] = await db.execute('INSERT INTO `infos` (`taille`, `nourriture`, `gestation`, `poids`, `id_espece`) values(?,?,?,?,?)', [
            req.body.taille, req.body.nourriture, req.body.gestation, req.body.poids, req.body.id_espece
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"infos créée"
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
        const [row] = await db.execute(`SELECT * FROM infos where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                infos: row[0]
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}

exports.findByIdEspece = async(req, res, error) => {
    try{
        const [row] = await db.execute(`SELECT * FROM infos where id_espece = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                infos: row[0]
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
        const [row] = await db.execute(`update infos set taille = ?, nourriture = ?, gestation = ?, poids = ?, id_espece = ? where id = ?`, [
            req.body.taille, req.body.nourriture, req.body.gestation, req.body.poids, req.body.id_espece, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"infos modifiée"
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
        const [row] = await db.execute("delete FROM infos where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"infos supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}