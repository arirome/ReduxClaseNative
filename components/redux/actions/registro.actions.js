
//el tipo de evento que se realizará
import { ADD_USER, ERROR_USER } from "../type/types";

//La constante BASE_URL actúa como una ubicación central para almacenar la URL
// base del servidor o aplicación web con la que desea interactuar.
const BASE_URL = 'http://192.168.1.36:3000';//agregamos nuestra ip y el puerto del servidor

import axios from 'axios'


// definimos una funcion llamada fetchDataUser, para crear una acción.
//esta funcion devuelve un objeto que tiene 2 propiedades, esto permite que redux pueda manejarla mediante su reducer correspondiente
  export const fetchDataUser = (data) => ({
    type: ADD_USER,
    payload: data //payload: datos que se envía junto con una acción,
  });
  
  export const fetchErrorUser = (error) => ({
    type: ERROR_USER,
    payload: error
  });
  
 
  
  
  
  export const fetchData = (email, password) => {

// dispatch: enviar acciones a la tienda Redux
//La función devuelve otra función que toma el dispatch como argumento, permitiendo realizar operaciones asincronas

    return async (dispatch) => {

// configuramos la solicitud definiendo un objeto config para especificar los encabezados de la solicitud, especificando que el contenido va a ser en formato JSON
        const config = {headers : {'Content-Type':'application/json'}}

//definimos el cuerpo de la solicitud y convertimos al objeto que tiene email, password en una cadena JSON
        const body = JSON.stringify({email, password})

      try {

        //realizamos una solicitud POST a la URL
        //axios.post devuelve una promesa que se espera con await
        const res = await  axios.post(`${BASE_URL}/users`, body, config)

        console.log("res",res)


 //Una vez que se ha obtenido la respuesta de la API, se despacha la acción  fetchDataUser,
 //se le pasa como argumento res.data, pasando los datos del usuario obtenidos de la respuesta

        dispatch(fetchDataUser(res.data));

      } catch (error) {

 //Si hay un error en la solicitud, se despacha una acción fetchErrorUser con un mensaje de error.
        error = error ? error.message : 'Error';

        dispatch(fetchErrorUser(error));
      }
    };
  };





