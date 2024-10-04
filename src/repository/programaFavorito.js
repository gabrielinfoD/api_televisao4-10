import con from './connection.js'

export async function inserirFavorito(favorito){
    const comando = `
    insert into tb_programa_favorito(id_usario, id_canal_programa, vl_avaliacao)
    values (?,?,?);
    
    `
    let info = await con.query(comando, [favorito.usuario, favorito.canal_programa, favorito.avaliacao])

    let respostas = info[0]

    return respostas.insertId
}

export async function buscarFavorito(){
    const comando = `
    select id_programa_favorito,
	id_usuario              usuario,
	id_canal_programa       canalPrograma,
	vl_avaliacao            avaliacao 
    from  tb_programa_favorito;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta

}


export async function alterarFavorito(favorito, idFavorito){
    const comando = `
    update tb_programa_favorito
    set id_usuario = ? ,
        id_canal_programa = ? ,
        vl_avaliacao = ?
    where id_programa_favorito = ?;
    ` 
    let resposta = await con.query(comando, [favorito.usuario, favorito.canal_programa, favorito.avaliacao, idFavorito])
    let info = resposta[0]

    return info.affectedRows
}


export async function deletarFavorito(id){
    const comando = `
    delete from tb_programa_favorito
    where  id_programa_favorito = ? ;
    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows 

}