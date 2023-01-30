const db = require('./_database');

async function dropTables() {
    await db.connect()

    await db.query(`drop table evento CASCADE`)
    await db.query(`DROP table participante CASCADE`)
    await db.query(`Drop table evento_participante CASCADE`)
    await db.end()

    console.log('Tabela removida');
}

dropTables()