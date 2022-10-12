import { GET_ALL_PAISES, GET_DETAIL, GET_FILT} from "./actions";

const initialState = {
  paises:[],
  detalles: {},
  busqueda:""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAISES:
      return {...state, paises: action.payload}
    case GET_FILT:
      return {...state, paises: action.payload}
      case GET_DETAIL:
        return {...state, detalles: action.payload}
    default:
      return state;
  }
}
export default rootReducer;
