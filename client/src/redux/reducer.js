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
  actividades: [],
  actualizarFilt: false,
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
    case "actualizar":
      return{...state, actualizar: action.payload};
    case "obteneractividades":
      return{...state, actividades: action.payload};
    case "cambiarDetail":
      return{...state, detalles:action.payload};
    case "cambiarActividades":
      return{...state, actividades: action.payload};
    case "ACTUALIZACIONBD":
      return{...state,actividades:action.payload};
    case "BORRARACBD":
      return{...state, actividades:action.payload}
    case "ACTUALIZARFILTRADO":
      return{...state, actualizarFilt:action.payload}
    default:
      return state;
  }
}
export default rootReducer;
