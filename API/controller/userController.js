const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM user', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                user: row
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
        const [row] = await db.execute('INSERT INTO `user` (`login`, `password`, `nom`, `prenom`, `id_role`) values(?,?,?,?,?)', [
            req.body.login, req.body.password, req.body.nom, req.body.prenom, req.body.id_role
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"user créée"
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
        const [row] = await db.execute(`SELECT * FROM user where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                user: row[0]
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
        const [row] = await db.execute(`update user set login = ?, password = ?, nom = ?, prenom = ?, id_role = ? where id = ?`, [
            req.body.login, req.body.password, req.body.nom, req.body.prenom, req.body.id_role, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"user modifiée"
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
        const [row] = await db.execute("delete FROM user where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"user supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}