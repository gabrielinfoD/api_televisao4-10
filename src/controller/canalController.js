import  * as db from "../repository/canalRepository.js";
import { Router } from 'express'
const endpoints = Router();

endpoints.post('/emissora/', async (req, resp) => {
    try{
        let emissora = req.body
        let id = await db.inserirCanal(emissora)

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


endpoints.get('/emissora', async (req, resp) => {
    try{
        let emissora = await db.buscarCanal();
        resp.send(emissora)

    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
}  )



endpoints.put('/emissora/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let emissora = req.body;

            let LinhasAfetadas = await db.alterarCanal(emissora, id);
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


endpoints.delete('/emissora/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarCanal(id);
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








export default endpoints;