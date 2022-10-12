// Aca deben declarar las variables donde tengan el action types.
import axios from "axios";
export const GET_ALL_PAISES = "getpaises";
export const GET_FILT = "obtenerfiltrado";
export const GET_DETAIL = "obtenerdetalle";


export function getAllPaises() {
  return (dispatch) =>
    axios("http://localhost:3001/countries")
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_ALL_PAISES, payload }));
}

export function getFilt(camb) {
  return (dispatch) => 
  axios(`http://localhost:3001/countries?name=${camb}`)
  .then(res=>res.data)
  .then(payload=> dispatch({type: GET_FILT, payload}));
}
export function getDetail(name) {
    return (dispatch) => 
    axios(`http://localhost:3001/countries/${name}`)
    .then(res=>res.data)
    .then(payload=> dispatch({type: GET_DETAIL, payload}));
  }