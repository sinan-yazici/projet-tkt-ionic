const db = require('../dbConfig').promise()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.login = async(req, res, error) => {
    try{
        const [row] = await db.execute("SELECT * FROM `user` WHERE `login`=?", [req.body.login]); 
        if(row.length === 0)
        {
            return res.status(422).json({
                message:"login invalide" //différent de celle de la bdd
            })
        }
        const comparepassword = await bcrypt.compare(req.body.password, row[0].password)
        if(!comparepassword)
        {   
            return res.status(422).json({
                message: "mdp incorrect"
            })
        }
        else{
            return res.json({
                message: "L'utilisateur est correct",
                user_droit: row[0].id_role
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}
