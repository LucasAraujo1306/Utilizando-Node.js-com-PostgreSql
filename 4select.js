const db = require('./_database');

async function listData() {
    await db.connect()
    let resultEvento
    resultEvento = await db.query(`select * from evento`);
    console.log('Evento')
    console.log(resultEvento.rows);

    let resultParticipante
    resultParticipante = await db.query(`select * from participante`);
    console.log('Participante')
    console.log(resultParticipante.rows);

    let resultEventoParticipante
    resultEventoParticipante = await db.query(`
    select e.nome as evento , p.nome as participante 
    from evento e , participante p , evento_participante ep
    where e.id = ep.evento_id and p.id =ep.participante_id
    `);
    console.log('Evento_participante')
    console.log(resultEventoParticipante.rows);
    await db.end()
}

listData();