import * as db from "../repository/programaRepository.js"
import { Router } from 'express'
const endpoints = Router();

endpoints.post('/programa/', async (req, resp) => {
    try{
        let programa = req.body
        let id = await inserirPrograma(programa)

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


endpoints.get('/programa', async (req, resp) => {
    try{
        let programa = await db.buscarprograma();
        resp.send(programa)

    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
}  )



endpoints.put('/programa/:id', async (req, resp) => {
    try{
        let id = req.params. id;
        let programa = req.body;

            let LinhasAfetadas = await db.alterarPrograma(id, programa);
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


endpoints.delete('/programa/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarPrograma(id);
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