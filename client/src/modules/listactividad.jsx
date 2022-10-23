import React from "react";
import { useDispatch } from "react-redux";
import { actualizar, deleteActividadBD } from "../redux/actions";
import {Link} from "react-router-dom";
import "./estilos/listactividad.css";
function Listactividad({
  id,
  nombre,
  duracion,
  temporada,
  dificultad,
  paises,
}) {
  const dispatch = useDispatch();

  function eliminarActividad() {
    dispatch(deleteActividadBD({ id: id }));
    dispatch(actualizar(true));
  }
  return (
    <div className="contenedorListActividad">
      <div className="contNomGr">
        <span id="nombreListActividad">{nombre}</span>
      </div>
      <div className="contDatosGr">
        <span className="etiquetaIden">Duracion:</span>
        <span className="datoActividadlist">{duracion}</span>
        <span className="etiquetaIden">Temporada:</span>
        <span className="datoActividadlist">{temporada}</span>
        <span className="etiquetaIden">Dificultad:</span>
        <span className="datoActividadlist">{dificultad}</span>
      </div>
      <div className="contPaisesGr">
        {paises && paises.map((e) => <span key={e.nombre}>{e.nombre}</span>)}
      </div>
      <div className="contBotonesList">
        <button id="btnEliminarActividad" onClick={eliminarActividad}>
          X
        </button>
        <Link to={`/editor/${id}`}><button id="btnEditarActividad"></button></Link>
      </div>
    </div>
  );
}

export default Listactividad;
