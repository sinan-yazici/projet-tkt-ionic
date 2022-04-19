const db = require('../dbConfig').promise()  //promise : valeur dispo si besoin

exports.findAll = async(req, res, error) => {
    try{
    const [row] = await db.execute('SELECT * FROM sante', [req.body]);
        if(row.length > 0)
        {
            return res.json({
                sante: row
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
        console.log(req.body);
        const [row] = await db.execute('INSERT INTO `sante` (`note`, `date`, `observation`, `id_animal`) values(?,?,?,?)', [
            req.body.note, req.body.date, req.body.observation, req.body.id_animal
        ]);
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"sante créée"
            })
        }
    }
    catch(err)
    {
        error(err);
    }

}

// exports.addSante = async(req, res, error) => {
//     try{
//         const [row] = await db.execute('INSERT INTO `sante` (`note`, `date`, `observation`, `id_animal`) values(?,?,?,?)', [
//             req.body.note, req.body.date, req.body.observation, req.body.id_animal
//         ]);
//         if(row.affectedRows === 1)
//         {
//             return res.status(201).json({
//                 message:"sante créée"
//             })
//         }
//     }
//     catch(err)
//     {
//         error(err);
//     }

// }


exports.findById = async(req, res, error) => {
    try{
        const [row] = await db.execute(`SELECT * FROM sante where id = ${req.params.id} `)
        if(row.length > 0)
        {
            return res.json({
                sante: row[0]
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
        const [row] = await db.execute(`update sante set note = ?, date = ?, observation = ?, id_animal = ? where id = ?`, [
            req.body.note, req.body.date, req.body.observation, req.body.id_animal, req.params.id
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"sante modifiée"
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
        const [row] = await db.execute("delete FROM sante where id = ?", [
            req.params.id,
        ])
        if(row.affectedRows === 1)
        {
            return res.status(201).json({
                message:"sante supprimé"
            })
        }
    }
    catch(err)
    {
        error(err);
    }
}