import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actualizar,
  cambiarCont,
  getAllPaises,
  masPoblacion,
  menorPoblacion,
  ordenAs,
  ordenDes,
} from "../redux/actions";
import "./estilos/ordenfiltro.css";

function Ordenfiltro() {
  const dispatch = useDispatch();
  const lista = useSelector((s) => s.paises);
  const [sta, setSta] = useState("");
  const [cont, setCont] = useState("");

  useEffect(() => {
    dispatch(cambiarCont(lista));
    if (cont === "Africa") {
      let nLista = lista.filter((e) => e.continente === cont);
      dispatch(cambiarCont(nLista));
      dispatch(actualizar(true))

    } else if (cont === "Asia") {
      let nLista = lista.filter((e) => e.continente === cont);
      dispatch(cambiarCont(nLista));
      dispatch(actualizar(true))

    } else if (cont === "Europe") {
      let nLista = lista.filter((e) => e.continente === cont);
      dispatch(cambiarCont(nLista));
      dispatch(actualizar(true))

    }else if (cont === "Oceania") {
      let nLista = lista.filter((e) => e.continente === cont);
      dispatch(cambiarCont(nLista));
      dispatch(actualizar(true))

    }else if (cont === "South America") {
      let nLista = lista.filter((e) => e.continente === cont);
      dispatch(cambiarCont(nLista));
      dispatch(actualizar(true))
      
    }else if (cont === "North America") {
      let nLista = lista.filter((e) => e.continente === cont);
      dispatch(cambiarCont(nLista));
      dispatch(actualizar(true))
    }else if(cont === "none"){
      dispatch(getAllPaises())
    }
    if (sta === "descendente") {
      dispatch(ordenDes(lista));
      dispatch(actualizar(true));
    } else if (sta === "none") {
      dispatch(getAllPaises());
      dispatch(actualizar(true));
    } else if (sta === "ascendente") {
      dispatch(ordenAs(lista));
      dispatch(actualizar(true));
    } else if (sta === "+poblacion") {
      dispatch(masPoblacion(lista));
      dispatch(actualizar(true));
    } else if (sta === "-poblacion") {
      dispatch(menorPoblacion(lista));
      dispatch(actualizar(true));
    }
  }, [sta, cont]);
  function cambioOrden(e) {
    let valor = e.target.value;
    setSta(valor);
  }
  function filtrarCont(e) {
    let valor = e.target.value;
    setCont(valor);
  }

  return (
    <div className="contOrdenFiltro">
      <span>Orden:</span>
      <select onChange={(e) => cambioOrden(e)} value={sta}>
        <option value={"none"}>none</option>
        <option value={"descendente"}>Descendente</option>
        <option value={"ascendente"}>Ascendente</option>
        <option value={"+poblacion"}>Mayor poblacion</option>
        <option value={"-poblacion"}>Menor poblacion</option>
      </select>
      <span>Continente:</span>
      <select onChange={(e) => filtrarCont(e)} value={cont}>
        <option value={"none"}>none</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">America{"(Sur)"}</option>
        <option value="North America">America{"(Norte)"}</option>
      </select>
    </div>
  );
}

export default Ordenfiltro;
