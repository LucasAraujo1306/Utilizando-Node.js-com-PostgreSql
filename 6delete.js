const db = require('./_database');

async function deleta() {
    await db.connect()
    const deletequery = (`delete from evento_participante where participante_id = $1`)
    const parms = [1]
    await db.query(deletequery, parms);

    await db.end()
    console.log('Atualização realizada com sucesso')

};

deleta()