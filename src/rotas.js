import canalController from './controller/canalController.js' 
import favoritoController from './controller/favoritoController.js' 
import programaController from './controller/programaController.js' 
import usuarioController from './controller/usuarioController.js'

export default function adicionarRotas(servidor){
    servidor.use(canalController)
    servidor.use(programaController)
    servidor.use(favoritoController)
    servidor.use(usuarioController)
}
