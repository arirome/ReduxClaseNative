
import {
    ADD_USER,
    ERROR_USER,
 
  } from "../type/types";
  
  //representa el punto de partida para los datos de la aplicación administrados por ese reductor en particular.
  const INITIAL_STATE = {
  data: [],
  error: null,
    
    
  };
  
  
  //La función debe tomar dos argumentos:
  //state: el estado actual, inicializado con INITIAL_STATE como valor predeterminado
  //action: el objeto de acción que encapsula el evento que desencadena la actualización del estado.
  const registroReducer = (state = INITIAL_STATE, action) => {

    //desestructura las propiedades de type y payload del objeto de acción y las asigna a variables separadas
    //Esto permite que el reductor acceda y utilice fácilmente los datos de type y payload de la acción para actualizaciones de estado. 
    const { type, payload } = action;

    // el switch en este caso nos proporciona una forma clara y concisa de asignar 
    //tipos de acciones a una lógica de actualización de estado específica
    switch (type) {
      
      case ADD_USER:
        return {

          data: payload,
          //El operador de propagación (...) se utiliza para crear una nueva copia del array existente
          //state.data es el array actual que contiene los datos
          //...state.data obtiene todos los elementos del array y los "expande" en un nuevo array
          //data:[...state.data, payload],
          error: false,
          
          
        };

      case ERROR_USER:
        return {
         
          error: payload
         
        };
      
     //manejamos los  tipos de acciones que no coinciden con ninguno de los casos definidos en la declaración de cambio
     // y se debe devolver el estado actual
      default:
        return state;
    }
  };
  
  export default registroReducer;  
  