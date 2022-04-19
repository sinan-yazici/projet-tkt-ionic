const db = require('../dbConfig').promise()
const bcrypt = require('bcryptjs')

exports.register = async(req, res, error) => {
    try{
        const [row] = await db.execute('SELECT login from user where login=?', [
            req.body.login
        ]);

        if (row.length > 0) {
            return res.status(201).json({message: 'The username already exists'})
        }

        const crypt = await bcrypt.hash(req.body.password, 12)
        const [rows] = await db.execute('INSERT INTO `user` (`login`, `password`, `nom`, `prenom`, `id_role`) values(?,?,?,?,?)', [
            req.body.login, crypt, req.body.nom, req.body.prenom, req.body.id_role
        ]);
        

        if(rows.affectedRows === 1)
        {
            return res.status(201).json({
                message:"user créé" //différent de celle de la bdd
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}