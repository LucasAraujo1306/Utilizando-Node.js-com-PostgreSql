const db = require('./_database');

async function insertData() {
    await db.connect()

    const queryEvento = `insert into evento (nome) values ($1)`
    await db.query(queryEvento, ['Encontro Node.js'])
    await db.query(queryEvento, ['Encontro PostgresSql'])

    const queryParticipante = `insert into participante (nome) values ($1)`
    await db.query(queryParticipante, ['Carloss'])
    await db.query(queryParticipante, ['Augusto'])
    await db.query(queryParticipante, ['Janaina'])
    await db.query(queryParticipante, ['Rafael'])

    const queryEventoParticipante = `insert into evento_participante (evento_id, participante_id) values($1,$2)`
    await db.query(queryEventoParticipante, [1, 1])
    await db.query(queryEventoParticipante, [1, 2])
    await db.query(queryEventoParticipante, [1, 3])

    await db.query(queryEventoParticipante, [2, 3])
    await db.query(queryEventoParticipante, [2, 4])

    await db.end()
    console.log('Insormações inserida')
}

insertData()