import con from './connection.js'

export async function inserirUsuario(usuario){
    const comando = `
    insert into tb_usuario(nm_usuario)
    values (?);
    
    `
    let info = await con.query(comando, [usuario.nomeUsuario])

    let respostas = info[0]

    return respostas.insertId
}



export async function buscarUsuario(){
    const comando = `
    select id_usuario
	nm_usuario
    from  tb_usuario;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta

}



export async function alterarUsuario(usuario, idUsuario){
    const comando = `
    update tb_usuario
    set id_canal = ?,
        nm_usuario= ?
    where id_usuario = ?;
    ` 
    let resposta = await con.query(comando, [usuario.nomeUsuario, idUsuario] )
    let info = resposta[0]

    return info.affectedRows
}



export async function deletarUsuario(id){
    const comando = `
    delete from tb_usuario
    where id_usuario = ? ;
    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows 

}