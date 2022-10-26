import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { getActividades, actualizar, cambAct } from "../redux/actions";
import Listactividad from "./listactividad";
import "./estilos/centroHome.css";
function CentroHome() {
  const dispatch = useDispatch();
  const actividades = useSelector((e) => e.actividades);

  useEffect(() => {
    dispatch(getActividades());
  }, [])
  async function Inicio() {
    let res;
    await swal({
      title: "¡Bienvenid@ al centro de actividades!",
      text: "Aquí vas a poder editar y eliminar las actividades que creaste",
      icon: "info",
      buttons: ["Saltar", "Siguiente"],
    }).then((result) => (res = result));

    if (res === true) {
      await swal({
        title: "Editar",
        text: "Para editar la actividad puedes tocar el boton del lapiz que veras a la derecha de cada actividad",
        button: "Siguiente",
        icon: "success",
      }).then((result) => (res = result));
    }
    if (res === true) {
      await swal({
        title: "Eliminar",
        text: "Para eliminar la actividad puedes tocar el boton (X) que veraz a la derecha de cada actividad",
        button: "Finalizar",
        icon: "error",
      });
    }
  }
  return (
    <div className="fontCentroHome">
      {/* <button onClick={Inicio} id="btninfocentro">?</button> */}
      {actividades ? (
        actividades.map((e) => (
          <Listactividad
            key={e.nombre}
            id={e.id}
            nombre={e.nombre}
            duracion={e.duracion}
            temporada={e.temporada}
            dificultad={e.dificultad}
            paises={e.paises}
          />
        ))
      ) : (
        <span>No hay actividades aun, crea una y la veras aqui.</span>
      )}
    </div>
  );
}

export default CentroHome;
