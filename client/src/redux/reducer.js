import {
  GET_ALL_PAISES,
  GET_DETAIL,
  GET_FILT,
  CAMBIAR_CONTENIDO,
} from "./actions";

const initialState = {
  paises: [],
  detalles: {},
  busqueda: "",
  actualizar: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAISES:
      return { ...state, paises: action.payload };
    case GET_FILT:
      return { ...state, paises: action.payload };
    case GET_DETAIL:
      return { ...state, detalles: action.payload };
    case CAMBIAR_CONTENIDO:
      return { ...state, paises: action.payload };
    case "filtorderas":
      return { ...state, paises: action.payload };
    case "actualizar":
      return{...state, actualizar: action.payload}
    default:
      return state;
  }
}
export default rootReducer;
