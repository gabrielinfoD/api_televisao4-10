import con from './connection.js'

export async function inserirCanal(canal){
    const comando = `
    insert into tb_canal(nm_canal, nr_canal, bt_aberto )
    values (?,?,?);
    `
    let info = await con.query(comando, [canal.nome, canal.numero, canal.aberto])

    let respostas = info[0]

    return respostas.insertId
}

export async function buscarCanal(){
    const comando = `
    select id_canal
	nm_canal    nomeCanal,
	nr_canal    numeroCanal,
    bt_aberto   aberto
    from  tb_canal;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta

}


export async function alterarCanal(canal, idCanal){
    const comando = `
    update tb_canal
    set nm_canal = ?,
        nr_canal = ? ,
        bt_aberto =? 
    where id_canal = ?;
    ` 
    let resposta = await con.query(comando, [canal.nome, canal.numero, canal.aberto, idCanal])
    let info = resposta[0]

    return info.affectedRows
}


export async function deletarCanal(id){
    const comando = `
    delete from tb_canal
    where id_canal = ? ;
    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows 

}