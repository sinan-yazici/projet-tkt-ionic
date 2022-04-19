const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM enclos', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                enclos: row
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
        const [row] = await db.execute('INSERT INTO `enclos` (`libelle`, `emplacement`) values(?,?)', [
            req.body.libelle, req.body.emplacement
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"enclos créée"
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
        const [row] = await db.execute(`SELECT * FROM enclos where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                enclos: row[0]
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
        const [row] = await db.execute(`update enclos set libelle = ?, emplacement = ? where id = ?`, [
            req.body.libelle, req.body.emplacement, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"enclos modifiée"
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
        const [row] = await db.execute("delete FROM enclos where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"enclos supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}