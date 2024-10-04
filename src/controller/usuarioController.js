import * as db from "../repository/usuarioRepository.js"
import { Router } from 'express'
const endpoints = Router();



endpoints.post('/usuario/', async (req, resp) => {
    try{
        let usuario = req.body
        let id = await inserirUsuario(usuario)

        resp.send({
            novoId : id
        })
    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
}  )


endpoints.get('/usuario', async (req, resp) => {
    try{
        let usuario = await db.buscarUsuario();
        resp.send(usuario)

    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
}  )



endpoints.put('/usuario/:id', async (req, resp) => {
    try{
        let id = req.params. id;
        let usuario = req.body;

            let LinhasAfetadas = await db.alterarUsuario(id, usuario);
            if (LinhasAfetadas >= 1){
                resp.send();
            }
            else {
                resp.status(404).send ({error: 'Nenhum registro encontrado'})
            }

    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
}  )


endpoints.delete('/usuario/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarUsuario(id);
        if(LinhasAfetadas >= 1){
            resp.send();
        }

 else {
    resp.status(404).send({error:'Nenhum registro encontrado'})
 }

    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
}  )











export default endpoints