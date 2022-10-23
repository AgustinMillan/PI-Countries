import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actualizar,
  cambiarCont,
  getActividades,
  getAllPaises,
} from "../redux/actions";
import "./estilos/ordenfiltro.css";

function Ordenfiltro() {
  const dispatch = useDispatch();
  const lista = useSelector((s) => s.paises);
  const actividades = useSelector((s) => s.actividades);
  const [filt, setFilt] = useState({
    actividad: "",
    continente: "",
    orden: "",
    limpiar: false,
  });
  useEffect(() => {
    if (!lista.length) {
      dispatch(getAllPaises());
    }
    if (!actividades.length) {
      dispatch(getActividades());
    }
    let filtroF = lista;
    if (filt.actividad !== "") {
      let narr = [];
      let actividad = actividades.find((el) => el.nombre === filt.actividad);
      if (actividad) {
        for (let i = 0; i < lista.length; i++) {
          for (let e = 0; e < actividad.paises.length; e++) {
            if (lista[i].nombre === actividad.paises[e].nombre) {
              narr.push(lista[i]);
            }
          }
        }
      }
      filtroF = narr;
    }

    if (filt.continente === "Africa") {
      let narr;
      narr = filtroF.filter((e) => e.continente === filt.continente);
      filtroF = narr;
    } else if (filt.continente === "Asia") {
      let narr;
      narr = filtroF.filter((e) => e.continente === filt.continente);
      filtroF = narr;
    } else if (filt.continente === "Europe") {
      let narr;
      narr = filtroF.filter((e) => e.continente === filt.continente);
      filtroF = narr;
    } else if (filt.continente === "Oceania") {
      let narr;
      narr = filtroF.filter((e) => e.continente === filt.continente);
      filtroF = narr;
    } else if (filt.continente === "South America") {
      let narr;

      narr = filtroF.filter((e) => e.continente === filt.continente);
      filtroF = narr;
    } else if (filt.continente === "North America") {
      let narr;
      narr = filtroF.filter((e) => e.continente === filt.continente);
      filtroF = narr;
    }

    if (filt.orden === "descendente") {
      let narr;
      narr = filtroF.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
      });
      filtroF = narr;
    } else if (filt.orden === "ascendente") {
      let narr;
      narr = filtroF.sort((a, b) => {
        if (a.nombre < b.nombre) return 1;
        if (a.nombre > b.nombre) return -1;
        return 0;
      });
      filtroF = narr;
    } else if (filt.orden === "+poblacion") {
      let narr;
      narr = filtroF.sort((a, b) => {
        if (a.poblacion < b.poblacion) return 1;
        if (a.poblacion > b.poblacion) return -1;
        return 0;
      });
      filtroF = narr;
    } else if (filt.orden === "-poblacion") {
      let narr;
      narr = filtroF.sort((a, b) => {
        if (a.poblacion < b.poblacion) return -1;
        if (a.poblacion > b.poblacion) return 1;
        return 0;
      });
      filtroF = narr;
    }

    dispatch(actualizar(true));
    dispatch(cambiarCont(filtroF));
  }, [dispatch, filt]);
  function cambioOrden(e) {
    let valor = e.target.value;
    setFilt({ ...filt, orden: valor });
  }
  function filtrarCont(e) {
    let valor = e.target.value;
    setFilt({ ...filt, continente: valor });
  }
  function filtAct(e) {
    let valor = e.target.value;
    setFilt({ ...filt, actividad: valor });
  }
  function limpiarFiltros() {
    dispatch(getAllPaises());
    setFilt({ actividad: "", continente: "", orden: "" });
  }
  return (
    <div className="contOrdenFiltro">
      <div>
        <span className="ordenSpan">Orden:</span>
        <select
          className="ordenSelecasd"
          onChange={(e) => cambioOrden(e)}
          value={filt.orden}
        >
          <option value={"none"}>none</option>
          <option value={"descendente"}>Descendente</option>
          <option value={"ascendente"}>Ascendente</option>
          <option value={"+poblacion"}>Mayor poblacion</option>
          <option value={"-poblacion"}>Menor poblacion</option>
        </select>
      </div>
      <div>
        <span className="ordenSpan">Continente:</span>
        <select
          onChange={(e) => filtrarCont(e)}
          value={filt.continente}
          className="ordenSelecasd"
        >
          <option value={"none"}>none</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">America{"(Sur)"}</option>
          <option value="North America">America{"(Norte)"}</option>
        </select>
      </div>
      <div>
        <span className="ordenSpan">Actividad:</span>
        <select
          className="ordenSelecasd"
          onChange={(e) => filtAct(e)}
          value={filt.actividad}
        >
          <option value="none">none</option>
          {actividades &&
            actividades.map((e) => (
              <option value={e.nombre} key={e.nombre}>
                {e.nombre}
              </option>
            ))}
        </select>
      </div>
      <button id="btnBorrarFiltros" onClick={limpiarFiltros}>
        Quitar Filtros
      </button>
    </div>
  );
}

export default Ordenfiltro;
