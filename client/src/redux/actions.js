// Aca deben declarar las variables donde tengan el action types.
import axios from "axios";
export const GET_ALL_PAISES = "getpaises";
export const GET_FILT = "obtenerfiltrado";
export const GET_DETAIL = "obtenerdetalle";
export const CAMBIAR_CONTENIDO = "cambiarcontenido";

export function getAllPaises() {
  return (dispatch) =>
    axios("http://localhost:3001/countries")
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_ALL_PAISES, payload }));
}

export function getFilt(camb) {
  return (dispatch) =>
    axios(`http://localhost:3001/countries?name=${camb}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_FILT, payload }));
}
export function getDetail(name) {
  return (dispatch) =>
  axios(`http://localhost:3001/countries/${name}`)
  .then((res) => res.data)
  .then((payload) => dispatch({ type: GET_DETAIL, payload }));
}

export function getActividades(){
  return dispatch =>
  axios(`http://localhost:3001/activities`)
  .then(res => res.data)
  .then(payload => dispatch({type:"obteneractividades", payload}))
}

export function postActividad(obj){
  return async function(){
    await axios.post("http://localhost:3001/activities", obj)
  }
}

export function cambiarCont(c) {
  return (dispatch) => dispatch({ type: CAMBIAR_CONTENIDO, payload: c });
}

export function ordenDes(obj) {
  return (dispatch) => {
    obj.sort((a, b) => {
      if (a.nombre < b.nombre) return -1;
      if (a.nombre > b.nombre) return 1;
      return 0;
    });
    return dispatch({ type: "filtorderas", payload: obj });
  };
}
export function ordenAs(obj) {
  return (dispatch) => {
    obj.sort((a, b) => {
      if (a.nombre < b.nombre) return 1;
      if (a.nombre > b.nombre) return -1;
      return 0;
    });
    return dispatch({ type: "filtorderas", payload: obj });
  };
}

export function masPoblacion (obj){
  return (dispatch) => {
    obj.sort((a, b) => {
      if (a.poblacion < b.poblacion) return 1;
      if (a.poblacion > b.poblacion) return -1;
      return 0;
    });
    return dispatch({ type: "filtorderas", payload: obj });
  };
}

export function menorPoblacion (obj){
  return (dispatch) => {
    obj.sort((a, b) => {
      if (a.poblacion < b.poblacion) return -1;
      if (a.poblacion > b.poblacion) return 1;
      return 0;
    });
    return dispatch({ type: "filtorderas", payload: obj });
  };
}

export function actualizar(a){
  return (dispatch)=>dispatch({type:"actualizar", payload:a})
}
