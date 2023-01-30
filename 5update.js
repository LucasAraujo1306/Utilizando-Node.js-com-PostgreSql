const db = require('./_database');

async function update() {
    await db.connect()

    const updatequery = (`update participante set nome = $1 where id = $2 `)
    const parms = ['Carlos Augusto', 1]
    await db.query(updatequery, parms);

    await db.end()
    console.log('Atualização realizada com sucesso')

};

update()



