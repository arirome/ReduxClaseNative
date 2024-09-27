//funciones esenciales para crear y configurar una tienda Redux
//createStore: Se utiliza para crear una tienda Redux que contiene todo el estado de la aplicación
//applyMiddleware: mejora la tienda al permitirle agregar middleware, que proporciona funcionalidad adicional como el manejo de operaciones asincrónicas y efectos secundario
import { createStore, applyMiddleware } from 'redux' 

//La herramienta redux devtools nos permite poder ver los estados en el navegador
//asi que lo agregamos como extesion en nuestro navegador y descargamos el paquete
//y lo mandamos a llamar 
import { composeWithDevTools } from '@redux-devtools/extension'

//incorpora middleware diseñado específicamente para manejar operaciones asincrónicas dentro de su aplicación Redux
import {thunk} from 'redux-thunk' 


import Reducers from './../reducers'

export const store = createStore( 
  
   
    Reducers,
    //Redux Thunk ha sido instalado e incluido en el proyecto
    composeWithDevTools(applyMiddleware(thunk))
    
)





