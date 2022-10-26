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

export function getActividades() {
  return async (dispatch) =>
    await axios(`http://localhost:3001/activities`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: "obteneractividades", payload }));
}

export function postActividad(obj) {
  return async function () {
    await axios.post("http://localhost:3001/activities", obj);
  };
}

export function cambiarCont(c) {
  return (dispatch) => dispatch({ type: CAMBIAR_CONTENIDO, payload: c });
}

export function actualizar(a) {
  return (dispatch) => dispatch({ type: "actualizar", payload: a });
}

export function deleteActividadBD(obj) {
  return async (dispatch)=> {
    await axios.delete("http://localhost:3001/activities", {data:obj})
    .then(res=> res.data)
    .then(payload=> dispatch({type:"BORRARACBD",payload}))
  };
}

export function updateActividadBD(obj){
  return async (dispatch)=>{
    await axios.put("http://localhost:3001/activities", {obj})
    .then(res=> res.data)
    .then(payload => dispatch({type:"ACTUALIZACIONBD",payload}))
  }
}

export function cambDetail(a){
  return dispatch => dispatch({type:"cambiarDetail",payload:a})
}

export function cambAct(a){
  return dispatch => dispatch({type:"cambiarActividades",payload:a})
}

export function cambAF(a){
  return dispatch => dispatch({type:"ACTUALIZARFILTRADO", payload:a})
}