const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM pays', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                pays: row
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
        const [row] = await db.execute('INSERT INTO `pays` (`libelle`) values(?)', [
            req.body.libelle
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"pays créée"
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
        const [row] = await db.execute(`SELECT * FROM pays where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                pays: row[0]
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
        const [row] = await db.execute(`update pays set libelle = ? where id = ?`, [
            req.body.libelle, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"pays modifiée"
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
        const [row] = await db.execute("delete FROM pays where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"pays supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}