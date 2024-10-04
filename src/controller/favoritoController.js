import * as db from "../repository/programaFavorito.js"
import { Router } from 'express'
const endpoints = Router();


endpoints.post('/favorito/', async (req, resp) => {
    try{
        let emissora = req.body
        let id = await inserirFavoritol(emissora)

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


endpoints.get('/favorito', async (req, resp) => {
    try{
        let emissora = await db.buscarFavorito();
        resp.send(emissora)

    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
}  )



endpoints.put('/favorito/:id', async (req, resp) => {
    try{
        let id = req.params. id;
        let favorito = req.body;

            let LinhasAfetadas = await db.alterarFavorito(id, favorito);
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


endpoints.delete('/favorito/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarFavorito(id);
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