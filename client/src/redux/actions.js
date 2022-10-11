// Aca deben declarar las variables donde tengan el action types.
import axios from"axios";
export const GET_ALL_PAISES = "getpaises"

export function getAllPaises(){
    return dispatch => 
    axios("http://localhost:3001/countries")
    .then(res=>res.data)
    .then(payload=>dispatch({type:GET_ALL_PAISES, payload}))
}