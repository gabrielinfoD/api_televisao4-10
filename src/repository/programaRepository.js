import con from './connection.js'

export async function inserirPrograma(programa){
    const comando = `
    insert into tb_canal_programa(id_canal, nm_programa, ds_genero, hr_programa )
values (?,?,?,?);
    
    `
    let info = await con.query(comando, [programa.IdCanal, programa.nomePrograma, programa.genero])

    let respostas = info[0]

    return respostas.insertId
}

export async function buscarPrograma(){
    const comando = `
    select id_canal_programa
	id_canal        idCanal,
	nm_programa     programa,
    ds_genero       genero,
    hr_programa     horarioPrograma
    from  tb_canal_programa;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta

}


export async function alterarPrograma(programa, idPrograma){
    const comando = `
    update tb_canal_programa
    set id_canal = ?,
        nm_programa = ?,
        ds_genero = ?,
        hr_programa = ? 
    where id_canal_programa = ?;
    ` 
    let resposta = await con.query(comando, [programa.IdCanal, programa.nomePrograma, programa.genero, idPrograma])
    let info = resposta[0]

    return info.affectedRows
}


export async function deletarPrograma(id){
    const comando = `
    delete from tb_canal_programa
    where id_canal_programa = ? ;
    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows 

}